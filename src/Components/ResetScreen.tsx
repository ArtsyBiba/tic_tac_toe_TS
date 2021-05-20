import { FC } from 'react';
import styled from 'styled-components';
import { Winner } from './Board';
import { StartButton } from './StartButton';

type ResetScreenProps = {
    onReset(): void;
    winner: Winner;
};

export const ResetScreen: FC<ResetScreenProps> = ({ onReset, winner }) => {
    return (
        <>
            <WinnerHeading>
                {winner === 'tie'
                    ? 'It is a tie!'
                    : `The winner is ${winner}`
                }
            </WinnerHeading>
            <StartButton onClick={onReset}>Reset</StartButton>
        </>
    )
}

const WinnerHeading = styled.h2`
  color: #333;
  margin-top: 0;
  font-size: 2.5rem;
  font-family: 'Varela Round';
`;