import React from 'react';

const TopicCard = ({ slug, description }) => {
    return (
        <section>
            <h2>{slug}</h2>
            <p>{description}</p>
        </section>
    )
}

export default TopicCard;