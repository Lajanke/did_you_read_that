import React from 'react';
import * as api from '../utils/api';
import ErrorDisplayer from './ErrorDisplayer';

class CommentAdder extends React.Component {
    state = {
        body: '',
        commentFormOpen: false,
        formInvalid: false,
        err: '',
    }

    handleInputChange = (event) => {
        const { value } = event.target
        this.setState({
            body: value,
        })
    }

    handleSubmitForm = async (event) => {
        event.preventDefault();
        const { body } = this.state;
        const { article_id, user } = this.props

        if (body.match(/^\s*$/)) {
            this.setState({ formInvalid: true })
        } else {
            try {
                const comment = await api.postNewComment({...this.state, article_id, user})
                this.props.addCommentToList(comment)
            } catch (err) {
                this.setState({ err: err.response.data.msg, commentFormOpen: false, formInvalid: false })
            }
            this.setState({ body: '', commentFormOpen: false, formInvalid: false })
        }
    }

    handleCommentClick = () => {
        const { commentFormOpen } = this.state;
        this.setState({ commentFormOpen: !commentFormOpen })
    }

    render() {
        const { commentFormOpen, err, formInvalid, body } = this.state;
        if (err) return <ErrorDisplayer msg={err} />
        return (
            <React.Fragment>
                {!commentFormOpen &&
                    <React.Fragment>
                        <span role='img' aria-label='speech bubble'>💬 </span>
                        <button onClick={this.handleCommentClick}>Comment</button>
                    </React.Fragment>
                }
                {commentFormOpen &&
                    <form onSubmit={this.handleSubmitForm}>
                        <label htmlFor="body"></label>
                        <input onChange={this.handleInputChange} type='text' body="body" value={body} required='required' placeholder='What are your thoughts?' />
                        <button>POST</button>

                    </form>

                }
                {(formInvalid && commentFormOpen) &&
                    <p>Comment cannot be only spaces!</p>
                }
            </React.Fragment>
        )
    }
}

export default CommentAdder;