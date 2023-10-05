import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { HEADER_HEIGHT } from '@styles/constants';
import { color } from '@styles/color';

interface HeaderProps {
  title?: string;
}

const Header = ({ title, children }: PropsWithChildren<HeaderProps>) => (
  <Wrapper>
    {title && <Title>{title}</Title>}
    {children}
  </Wrapper>
);

export default Header;

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${HEADER_HEIGHT}rem;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  background: ${color.white};
`;
const Title = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
