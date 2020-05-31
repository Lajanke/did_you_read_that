import React from 'react';
import Sty from './StyledComponents';

const TopicCard = ({ slug, description }) => {

    return (
        <Sty.TopicCard>
            <section>
                <h2>{slug}</h2>
                <p>{description}</p>
            </section>
        </Sty.TopicCard>
    )
}

export default TopicCard;