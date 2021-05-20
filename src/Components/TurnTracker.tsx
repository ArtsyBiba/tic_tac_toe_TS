import styled from 'styled-components';

export const TurnTracker = () => {
    return (
        <>
            <Tracker>It's X's turn!</Tracker>
        </>
    )
}

const Tracker = styled.h2`
    color: #fff;
    text-align: center;
    font-size: 1.5rem;
    text-shadow: -3px 3px #00000066;
    font-family: 'Varela Round';
`;