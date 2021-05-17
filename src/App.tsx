import styled from 'styled-components';

export default function App() {
  return (
    <BoardContainer>
      App
    </BoardContainer>
  );
}

const BoardContainer = styled.div`
  background: #ffffff;
  width: 500px;
  height: 500px;
  border-radius: 16px;
  box-shadow: -6px 10px 30px 4px #00000033;
`;