import { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { Colors } from '@styles/designSystem/colors';

interface ChipProps {
  label: string;
  isActive: boolean;
  onClick?: MouseEventHandler<HTMLLIElement>;
}

const Chip = ({ label, isActive, onClick }: ChipProps) => (
  <Wrapper isActive={isActive} isClickable={!!onClick} onClick={onClick}>
    {label}
  </Wrapper>
);

export default Chip;

const Wrapper = styled.li<{ isActive: boolean; isClickable: boolean }>`
  ${props => props.isClickable && 'cursor: pointer;'}
  background: ${props => (props.isActive ? Colors.primary : Colors.white)};
  padding: 0.7rem 1.4rem;
  border: 1px solid ${Colors.primary};
  border-radius: 10rem;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8rem;
  color: ${props => (props.isActive ? Colors.white : Colors.primary)};
`;
