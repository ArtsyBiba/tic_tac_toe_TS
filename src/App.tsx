import { useState } from 'react';
import styled from 'styled-components';
import { Board, Winner } from './Components/Board';
import { StartScreen } from './Components/StartScreen';
import { ResetScreen } from './Components/ResetScreen';
import { motion } from 'framer-motion';

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

  const renderBoard = (state: GameState) => {
    switch (state) {
      case 'start':
        return <StartScreen onStart={onStart} />;
      case 'game':
        return <Board onGameEnd={onGameEnd} />;
      case 'reset':
        return <ResetScreen winner={winner} onReset={onReset} />;
    }
  };

  return (
    <BoardContainer animate={gameState}>
      {renderBoard(gameState)}
    </BoardContainer> 
  ); 
}

const variants = {
  hidden: { opacity: 0, scale: 0.8 },
  start: { opacity: 1, scale: 1, width: '200px', height: '100px', transition: { type: 'spring', duration: 0.8 } },
  game: { opacity: 1, scale: 1, width: '500px', height: '500px', transition: { type: 'spring', duration: 0.8 } },
  reset: { opacity: 1, scale: 1, width: '350px', height: '300px', transition: { type: 'spring', duration: 0.8 } },
};

const BoardContainer = styled(motion.div).attrs(() => ({
  initial: 'hidden',
  variants,
}))`
  background: #ffff;
  border-radius: 16px;
  box-shadow: -6px 10px 30px 4px #00000033;
  border: 20px solid #ffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
