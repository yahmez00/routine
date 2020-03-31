import styled, { css } from 'styled-components';

const Button = styled.button`
    background: transparent;
    border-radius: 7px;
    border: 2px solid palevioletred;
    color: palevioletred;
    padding: 0.5em 1em;
    font-size: 1.25rem;
    line-height: 1.25em;
    cursor: pointer;

    ${props =>
        props.primary &&
        css`
            background: palevioletred;
            color: white;
        `}
`;

export default Button;
