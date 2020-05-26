import React from 'react';

const TopicCard = ({ slug, description }) => {
    return (
        <div className='topic'>
            <h2>{slug}</h2>
            <p>{description}</p>
        </div>
    )
}

export default TopicCard;