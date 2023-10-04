import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface HeaderProps {
  title?: string;
}

const Header = ({ title, children }: PropsWithChildren<HeaderProps>) => (
  <Wrapper>
    <Title>{title}</Title>
    {children}
  </Wrapper>
);

export default Header;

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 5.4rem;
  padding: 0 2rem;
  background: white;
`;
const Title = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
