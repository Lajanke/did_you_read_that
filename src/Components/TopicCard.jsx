import React from 'react';

const TopicCard = ({ slug, description }) => {
    return (
        <article className='topic'>
            <h2>{slug}</h2>
            <p>{description}</p>
        </article>
    )
}

export default TopicCard;