import React from 'react';
import VotingButtons from './VotingButtons';

const CommentCard = ({ author, body, votes, created_at }) => {
    return (
        <article>
            <p>✎{author}</p>
            <p>{body}</p>
            <p>Created: {new Date(created_at).toDateString()}</p>
            <p>votes: {votes}</p>
            <VotingButtons />
        </article>
    )
}

export default CommentCard;