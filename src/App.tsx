import { useState } from 'react';
import styled from 'styled-components';
import { Board, Winner } from './Components/Board';
import { StartScreen } from './Components/StartScreen';
import { ResetScreen } from './Components/ResetScreen';

type GameState = 'start' | 'game' | 'reset';

export default function App() {
  const [winner, setWinner] = useState<Winner>();
  const [gameState, setGameState] = useState<GameState>('start');
  
  const onStart = () => {
    setGameState('game');
  };

  const onGameEnd = (winner: Winner) => {
    setWinner(winner);
    setGameState('reset');
  };

  const onReset = () => {
    setWinner(undefined);
    setGameState('game');
  };

  return (
    <BoardContainer>
      {
        {
          start: <StartScreen onStart={onStart} />,
          game: <Board onGameEnd={onGameEnd} />,
          reset: <ResetScreen winner={winner} onReset={onReset} />,
        }[gameState]
      }
    </BoardContainer>
  );
}

const BoardContainer = styled.div`
  background: #ffff;
  width: 500px;
  height: 500px;
  border-radius: 16px;
  box-shadow: -6px 10px 30px 4px #00000033;
  border: 20px solid #ffff;
`;
