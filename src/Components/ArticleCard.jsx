import React from 'react';
import VotingButtons from './VotingButtons';
import { Link } from '@reach/router';

const ArticleCard = ({ title, votes, topic, author, created_at }) => {
    return (
        <article>
            <h2>{title}</h2>
            <h3>{topic}</h3>
            <p>votes: {votes}</p>
            <p><Link to={`/users/${author}`}>✎{author}</Link></p>
            <p>Created: {new Date(created_at).toDateString()}</p>
            <VotingButtons />
        </article>
    )
}

export default ArticleCard;