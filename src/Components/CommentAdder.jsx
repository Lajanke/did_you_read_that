import React from 'react';
import * as api from '../utils/api';
import ErrorDisplayer from './ErrorDisplayer';
import Sty from './StyledComponents';

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
                const comment = await api.postNewComment({ ...this.state, article_id, user })
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
                        <button onClick={this.handleCommentClick}><span role='img' aria-label='speech bubble'>💬 </span>New Comment</button>
                    </React.Fragment>
                }
                {commentFormOpen &&
                    <Sty.CommentForm>
                        <form onSubmit={this.handleSubmitForm}>
                            <label htmlFor="body"></label>
                            <textarea onChange={this.handleInputChange} type='text' body="body" value={body} required='required' placeholder='What are your thoughts?' rows='3' className='commentText' />
                            <button className='postButton'>POST</button>
                        </form>
                        {(formInvalid && commentFormOpen) &&
                            <p className='alerts'>Comment cannot be only spaces!</p>
                        }
                    </Sty.CommentForm>
                }
            </React.Fragment>
        )
    }
}

export default CommentAdder;