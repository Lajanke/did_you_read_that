import React from 'react';
import * as api from '../utils/api';
import ErrorDisplayer from './ErrorDisplayer';

class CommentAdder extends React.Component {
    state = {
        body: '',
        article_id: this.props.article_id,
        user: this.props.user,
        commentFormOpen: false,
        err: '',
    }

    handleInputChange = (event) => {
        const { value } = event.target
        this.setState({
            body: value,
        })
    }

    handleSubmitForm = (event) => {
        event.preventDefault();
        api.postNewComment(this.state)
            .then((comment) => {
                this.props.addCommentToList(comment)
            })
            .catch(err => {
                this.setState({err: err.response.data.msg, isLoading: false})
            })
        this.setState({ body: '' })
    }

    handleCommentClick = () => {
        const { commentFormOpen } = this.state;
        this.setState({ commentFormOpen: !commentFormOpen })
    }

    render() {
        const { commentFormOpen, err } = this.state;
        if (err) return <ErrorDisplayer msg={ err } />
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
                        <input onChange={this.handleInputChange} type='text' body="body" value={this.state.body} placeholder='What are your thoughts?' />
                        <button>POST</button>
                    </form>
                }
            </React.Fragment>
        )
    }
}

export default CommentAdder;