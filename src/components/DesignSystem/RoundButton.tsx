import { MouseEventHandler, PropsWithChildren } from 'react';
import styled from 'styled-components';

interface RoundButtonProps {
  backgroundColor: string;
  fontColor: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const RoundButton = (props: PropsWithChildren<RoundButtonProps>) => {
  const { children, onClick, ...styles } = props;
  return (
    <Button {...styles} onClick={onClick}>
      {children}
    </Button>
  );
};

export default RoundButton;

const Button = styled.button<{ backgroundColor: string; fontColor: string }>`
  background: ${props => props.backgroundColor};
  border-radius: 10rem;
  font-weight: 600;
  color: ${props => props.fontColor};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22rem;
  height: 5rem;
`;
