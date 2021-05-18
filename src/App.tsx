import { useState } from 'react';
import styled from 'styled-components';
import { Board } from './Components/Board';

export default function App() {
  const [winner, setWinner] = useState<Winner>();
  const [gameState, setGameState] = useState<GameState>('start');
  
  return (
    <BoardContainer>
      <Board onGameEnd={() => {}} />
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
