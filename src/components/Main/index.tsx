'use client';

import Buttons from '@components/Main/Buttons';
import styled from 'styled-components';
import Question from '@assets/svgs/ri_question-line.svg';
import Header from '@components/DesignSystem/Header';
import { HEADER_HEIGHT } from '@styles/constants';
import MainHeader from '@components/Main/MainHeader';
import { useState } from 'react';
import RoundButton from '@components/DesignSystem/RoundButton';
import { zIndex } from '@styles/zIndex';
import { color } from '@styles/color';
import { Model } from '~/types/database/utils';

interface MainProps {
  initialVisitLogs: Model<'visitLog'>[];
}

const Main = ({ initialVisitLogs }: MainProps) => {
  const [visitLogs, setVisitLogs] =
    useState<Model<'visitLog'>[]>(initialVisitLogs);

  const numOfFavoriteVisitLogs =
    visitLogs.filter(visitLog => visitLog.isFavorite).length || 1;

  return (
    <Wrapper>
      <MainHeader />
      <Buttons />
      {!!numOfFavoriteVisitLogs && (
        <CompareButton backgroundColor={color.mint} fontColor={color.white}>
          비교하기 ({numOfFavoriteVisitLogs})
        </CompareButton>
      )}
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.main`
  padding-top: ${HEADER_HEIGHT}rem;
`;
const CompareButton = styled(RoundButton)`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 4rem;
  z-index: ${zIndex.footer};
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2);
`;
