'use client';

import Buttons from '@components/Main/Buttons';
import styled from 'styled-components';
import Question from '@assets/svgs/ri_question-line.svg';
import Header from '@components/DesignSystem/Header';
import { HEADER_HEIGHT } from '@styles/constants';
import MainHeader from '@components/Main/MainHeader';

interface MainProps {}

const Main = (props: MainProps) => (
  <Wrapper>
    <MainHeader />
    <Buttons />
  </Wrapper>
);

export default Main;

const Wrapper = styled.main`
  padding-top: ${HEADER_HEIGHT}rem;
`;
