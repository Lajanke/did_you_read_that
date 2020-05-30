import React from 'react';
import Sty from './StyledComponents';

const ArticleCard = ({ title, votes, topic, author, created_at, comment_count }) => {
    return (
        <Sty.ArticleCard>
            <section>
                <h2 className='acTitle'>{title}</h2>
                <h3 className='acTopic'>{topic}</h3>
                <p className='acAuthor'>✎{author}</p>
                <p className='acVotes'>votes: {votes}</p>
                <p className='acComments'><span role='img' aria-label='speech bubble'>💬 </span>{comment_count}</p>
                <p className='acDate'>{new Date(created_at).toDateString()}</p>
            </section>
        </Sty.ArticleCard>
    )
}

export default ArticleCard;