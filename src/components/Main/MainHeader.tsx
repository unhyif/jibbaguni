import Header from '@components/DesignSystem/Header';
import Question from '@assets/svgs/ri_question-line.svg';
import styled from 'styled-components';

interface MainHeaderProps {}

const MainHeader = (props: MainHeaderProps) => (
  <Header>
    <HeaderContent>
      <button>
        <Question />
      </button>
    </HeaderContent>
  </Header>
);

export default MainHeader;

const HeaderContent = styled.div`
  margin-left: auto;
`;
