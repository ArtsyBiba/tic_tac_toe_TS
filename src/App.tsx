import { useState } from 'react';
import styled from 'styled-components';
import { Board, Winner } from './Components/Board';

type GameState = 'start' | 'game' | 'reset';

export default function App() {
  const [winner, setWinner] = useState<Winner>();
  const [gameState, setGameState] = useState<GameState>('start');
  
  return (
    <BoardContainer>
      {{
        start: <button onClick={() => setGameState('game')}>Start</button>,
        game: <Board onGameEnd={() => {}} />,
        reset: <>Reset</>,
      }[gameState]}
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
