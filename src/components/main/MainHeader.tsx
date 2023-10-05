import Header from '@components/designSystem/Header';
import Home from '@assets/svgs/mingcute_home-1-line.svg';
import Question from '@assets/svgs/ri_question-line.svg';
import styled from 'styled-components';
import { color } from '@styles/designSystem/color';
import Link from 'next/link';
import { pathnames } from '@constants/pathnames';

interface MainHeaderProps {}

const MainHeader = (props: MainHeaderProps) => (
  <Header>
    <HeaderContent>
      <Link href={pathnames.createVisitLog}>
        <CreateButton>
          <Home />
          <span>기록하기</span>
        </CreateButton>
      </Link>
      <button>
        <Question />
      </button>
    </HeaderContent>
  </Header>
);

export default MainHeader;

const HeaderContent = styled.div`
  margin-left: auto;
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;
const CreateButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  align-items: center;
  background: ${color.primary};
  color: ${color.white};
  width: 10rem;
  height: 3.6rem;
  border-radius: 0.4rem;
  box-shadow:
    0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
`;
