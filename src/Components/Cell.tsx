import { FC } from 'react';
import styled from 'styled-components';

export type CellValue = 'x' | 'o' | undefined;

type CellProps = {
    value: CellValue;
    toggle(index: number): void;
    index: number;
}

export const Cell: FC<CellProps> = ({ value, toggle, index }) => {

    return (
        <CellContainer onClick={() => toggle(index)}>
            {
                value === 'o' ? "O" : value ? "X" : null
            }
        </CellContainer>
    )
}

const CellContainer = styled.button`
  background-color: #ffff;
  margin-bottom: -1px;
  border: none;
  cursor: pointer;
  outline: none;
`;