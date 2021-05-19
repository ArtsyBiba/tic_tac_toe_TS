import { FC } from 'react';
import { Winner } from './Board';

type ResetScreenProps = {
    onReset(): void;
    winner: Winner;
};

export const ResetScreen: FC<ResetScreenProps> = ({ onReset, winner }) => {
    return (
        <>
            <h2>The winner is {winner}</h2>
            <button onClick={onReset}>Reset</button>
        </>
    )
}