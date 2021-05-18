import { FC } from 'react';
import styled from 'styled-components';

export type CellValue = 'x' | 'o' | undefined;

type CellProps = {
    value: CellValue;
    toggle(index: number): void;
    index: number;
}

export const Cell: FC<CellProps> = () => {

    return (
        <CellContainer>
            
        </CellContainer>
    )
}

const CellContainer = styled.div`
  background-color: #ffff;
`;