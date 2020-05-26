import React from 'react';

const ArticleCard = ({ title, votes, topic, author, created_at }) => {
    return (
        <article>
            <h2>{title}</h2>
            <h3>{topic}</h3>
            <p>votes: {votes}</p>
            <p>✎{author}</p>
            <p>Created: {new Date(created_at).toDateString()}</p>
        </article>
    )
}

export default ArticleCard;