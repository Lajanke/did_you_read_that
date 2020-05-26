import React from 'react';
import * as api from '../utils/api';

class CommentAdder extends React.Component {
    state = {
        body: '',
        article_id: this.props.article_id,
        user: this.props.user,
        commentFormOpen: false,
    }

    handleInputChange = (event) => {
        const { value } = event.target
        this.setState({
            body: value,
        })
    }

    handleSubmitForm = (event) => {
        //const { article_id, user } = this.props;
       // const { body } = this.state;
        event.preventDefault();
        api.postNewComment(this.state)
            .then((comment) => {
                this.props.addCommentToList(comment)
            })
            this.setState({body: ''})    
    }

    handleCommentClick = () => {
        const { commentFormOpen } = this.state;
        this.setState({ commentFormOpen: !commentFormOpen })
    }

    render() {
        const { commentFormOpen } = this.state;
        return (
            <React.Fragment>
                {!commentFormOpen &&
                    <button onClick={this.handleCommentClick}>🗩 Comment</button>
                }
                {commentFormOpen &&
                    <form onSubmit={this.handleSubmitForm}>
                        <label htmlFor="body"></label>
                        <input onChange={this.handleInputChange} type='text' body="body" value={this.state.body} />
                        <button>POST</button>
                    </form>
                }
            </React.Fragment>
        )
    }
}

export default CommentAdder;