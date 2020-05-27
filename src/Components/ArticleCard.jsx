import React from 'react';

const ArticleCard = ({ title, votes, topic, author, created_at, comment_count }) => {
    return (
        <article>
            <h2>{title}</h2>
            <h3>{topic}</h3>
            <p>✎{author}</p>
            <p>votes: {votes}</p>
            <p><span role='img' aria-label='speech bubble'>💬 </span>{comment_count}</p>
            <p>Created: {new Date(created_at).toDateString()}</p>
        </article>
    )
}

export default ArticleCard;