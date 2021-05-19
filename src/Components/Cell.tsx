import { motion } from 'framer-motion';
import { FC } from 'react';
import styled from 'styled-components';
import circle from './circle.svg';
import cross from './cross.svg';

export type CellValue = 'x' | 'o' | undefined;

type CellProps = {
    value: CellValue;
    toggle(index: number): void;
    index: number;
}

export const Cell: FC<CellProps> = ({ value, toggle, index }) => {

    return (
        <CellContainer onClick={() => toggle(index)}>
            {value === 'o' ? (
                <Shape animate='visible' src={circle} /> 
            ) : value ? (
                <Shape animate='visible' src={cross} /> 
            ) : null}
        </CellContainer>
    )
}

const CellContainer = styled.button`
  background-color: #ffff;
  margin-bottom: -1px;
  border: none;
  cursor: pointer;
  outline: none;
  position: relative;
`;

const variants = {
    hidden: { opacity: 0.5, transform: 'translate3d(-50%, -50%, 0) scale(0.5)' },
    visible: { opacity: 1, transform: 'translate3d(-50%, -50%, 0) scale(1)' },
};

const Shape = styled(motion.img).attrs(() => ({
    initial: 'hidden',
    variants,
}))`
    height: 50px;
    width: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
`;