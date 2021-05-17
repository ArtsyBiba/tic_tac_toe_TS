import styled from 'styled-components';

export default function App() {
  return (
    <Board>
        <Cell />
        <Cell />
        <Cell />
    </Board>
  );
}

const Board = styled.div`
  background-color: #999999;
  width: 100%;
  height: 100%;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  display: grid;
  column-gap: 6px;
  row-gap: 6px;
`;

const Cell = styled.div`
  background-color: #ffff;
`;