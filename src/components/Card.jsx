import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    display: inline-block;
    margin-right: 8px;
    margin-bottom: 8px;
    padding: 2em;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    h2 {
        margin-top: 8px;
    }

    h5 {
        color: gray;
        line-height: 1rem;
        margin: 0;
    }
`;

const Card = props => {
    const card = props.card;

    return (
        <StyledCard>
            <h5>{card.id + 1}.</h5>
            <h2>{card.title}</h2>
            <h3>{card.duration} ms</h3>
            <p>{card.text}</p>
        </StyledCard>
    );
};

export default Card;
