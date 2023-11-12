import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { HeaderHeight } from '@styles/constants';
import { Colors } from '@styles/designSystem/colors';

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

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${HeaderHeight}rem;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  background: ${Colors.white};
  border-bottom: 1px solid ${Colors.lightGrey};
`;
const Title = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
`;
