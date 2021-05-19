import { FC } from 'react';
import { Winner } from './Board';

type ResetScreenProps = {
    onReset(): void;
    winner: Winner;
};

export const ResetScreen: FC<ResetScreenProps> = ({ onReset, winner }) => {
    return (
        <>
        <div>The winner is {winner}</div>
        <button onClick={onReset}>Reset</button>
        </>
    )
}