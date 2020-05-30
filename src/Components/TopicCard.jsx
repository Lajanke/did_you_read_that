import React from 'react';
import styled from 'styled-components';

const TopicCard = ({ slug, description }) => {

    const TopicCard = styled.div`
        
        h2 {
            background-color: #2d3b40;
            padding: 0.2rem 0 0.2rem 1rem;
            margin: 0.3rem 0 0.3rem 0;
        }

        p {
            text-align: right;
            margin: 0.5rem 0.3rem 0.5rem 0.3rem;
        }
    `;

    return (
        <TopicCard>
            <section>
                <h2>{slug}</h2>
                <p>{description}</p>
            </section>
        </TopicCard>
    )
}

export default TopicCard;