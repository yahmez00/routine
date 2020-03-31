import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    display: inline-block;
    width: 300px;
    margin: 16px 8px 16px 0;
    padding: 2em;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const Card = props => {
    const card = props.card;

    return (
        <StyledCard>
            <h1>
                {card.id + 1}. {card.title}
            </h1>
            <h3>{card.duration} ms</h3>
            <p>{card.text}</p>
        </StyledCard>
    );
};

export default Card;
