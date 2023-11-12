import styled from 'styled-components';
import { HeaderHeight } from '@styles/constants';
import Header from '@components/designSystem/Header';

interface VisitLogCreateProps {}

const VisitLogCreate = (props: VisitLogCreateProps) => (
  <Wrapper>
    <Header title="자세히 보기  🔍" />
  </Wrapper>
);

export default VisitLogCreate;

const Wrapper = styled.div`
  padding-top: ${HeaderHeight}rem;
`;
