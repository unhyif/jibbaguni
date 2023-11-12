import { MouseEventHandler, PropsWithChildren } from 'react';
import styled from 'styled-components';

interface RoundButtonProps {
  backgroundColor: string;
  fontColor: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const RoundButton = (props: PropsWithChildren<RoundButtonProps>) => {
  const { children, onClick, ...styles } = props;
  return (
    <Wrapper {...styles} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

export default RoundButton;

const Wrapper = styled.div<Omit<RoundButtonProps, 'onClick'>>`
  cursor: pointer;
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
