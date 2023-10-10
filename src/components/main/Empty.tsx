import styled from 'styled-components';
import Logo from '@assets/svgs/brand-logo.svg';
import { colors } from '@styles/designSystem/colors';

interface EmptyProps {}

const Empty = (props: EmptyProps) => (
  <Wrapper>
    <Logo width={120} height={120} />
    <Text>집을 기록하고, 기억하세요!</Text>
  </Wrapper>
);

export default Empty;

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;

  & path {
    fill: #e2e2e2;
  }
`;
const Text = styled.p`
  font-weight: 500;
  color: ${colors.midGrey};
`;
