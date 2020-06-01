import React from 'react';
import * as api from '../utils/api';
import { Link } from '@reach/router';
import VotingButtons from './VotingButtons';
import ErrorDisplayer from './ErrorDisplayer';
import Sty from './StyledComponents';

class CommentCard extends React.Component {
    state = {
        deleted: false,
        err: '',
    }

    handleDeleteComment = () => {
        this.deleteComment()
    }

    deleteComment = () => {
        const { comment_id } = this.props
        api.deleteById(comment_id, 'comments')
            .then(() => {
                this.setState({ deleted: true })
            })
            .catch(err => {
                this.setState({ err: err.response.data.msg, isLoading: false })
            })
    }

    render() {
        const { author, body, votes, created_at, user, comment_id } = this.props
        const { err } = this.state;
        const { noInteraction } = this.props
        if (this.state.deleted) return <p>Comment deleted</p>
        if (err) return <ErrorDisplayer msg={err} />

        return (
            <Sty.CommentCard>
                <section>
                    <p className='ccAuthor'><Link to={`/users/${author}`}>✎ {author}</Link></p>
                    <p className='ccBody'>{body}</p>
                    <p className='ccDate'>{new Date(created_at).toDateString()}</p>
                    {!noInteraction &&
                        <VotingButtons className='ccVotes' votes={votes} type='comments' id={comment_id} />
                    }
                    {user === author &&
                        <button onClick={this.handleDeleteComment} className='ccDelete'>DELETE</button>
                    }
                </section>
            </Sty.CommentCard>
        )
    }
}

export default CommentCard;