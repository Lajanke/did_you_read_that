import React from 'react';

const ArticleCard = ({ title, votes, topic, author }) => {
    return (
        <article>
            <h2>{title}</h2>
            <h3>{topic}</h3>
            <p>votes: {votes}</p>
            <p>✎{author}</p>
        </article>
    )
}

export default ArticleCard;