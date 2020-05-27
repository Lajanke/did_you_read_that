import React from 'react';
import { Link } from '@reach/router';
import VotingButtons from './VotingButtons';
import * as api from '../utils/api'

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
            this.setState({deleted: true})
        })
    }
    render() {
        const { author, body, votes, created_at, user} = this.props
        if (this.state.deleted) return <p>Comment deleted</p>
        
        return (
            <article>
                <p><Link to={`/users/${author}`}>✎{author}</Link></p>
                <p>{body}</p>
                <p>Created: {new Date(created_at).toDateString()}</p>
                <p>votes: {votes}</p>
                <VotingButtons />
                {user === author &&
                <button onClick={this.handleDeleteComment}>DELETE</button>
                }             
            </article>
        )
    }
   
}

export default CommentCard;