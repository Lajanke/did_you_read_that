import React from 'react';
import VotingButtons from './VotingButtons';

const CommentCard = ({ author, body, votes, created_at, user }) => {
    return (
        <article>
            <p>✎{author}</p>
            <p>{body}</p>
            <p>Created: {new Date(created_at).toDateString()}</p>
            <p>votes: {votes}</p>
            <VotingButtons />
            {user === author &&
            <button>DELETE</button>
            }
        </article>
    )
}

export default CommentCard;