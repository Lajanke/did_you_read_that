import React from 'react';
import * as api from '../utils/api';
import { Link } from '@reach/router';
import VotingButtons from './VotingButtons';

class CommentCard extends React.Component {
    state = {
        deleted: false,
    }

    handleDeleteComment = () => {
        this.deleteComment()
    }

    deleteComment = () => {
        const { comment_id } = this.props
        api.deleteCommentById(comment_id)
            .then(() => {
                this.setState({ deleted: true })
            })
    }

    render() {
        const { author, body, votes, created_at, user, comment_id } = this.props
        if (this.state.deleted) return <p>Comment deleted</p>

        return (
            <article>
                <p><Link to={`/users/${author}`}>✎{author}</Link></p>
                <p>{body}</p>
                <p>Created: {new Date(created_at).toDateString()}</p>
                <VotingButtons votes={votes} type='comments' id={comment_id} />
                {user === author &&
                    <button onClick={this.handleDeleteComment}>DELETE</button>
                }
            </article>
        )
    }

}

export default CommentCard;