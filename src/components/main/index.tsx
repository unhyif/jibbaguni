'use client';

import Buttons from '@components/main/Buttons';
import styled from 'styled-components';
import { HEADER_HEIGHT } from '@styles/constants';
import MainHeader from '@components/main/MainHeader';
import { useState } from 'react';
import RoundButton from '@components/designSystem/RoundButton';
import { elevations } from '@styles/designSystem/elevations';
import { colors } from '@styles/designSystem/colors';
import Link from 'next/link';
import { pathnames } from '@constants/pathnames';
import Empty from '@components/main/Empty';
import VisitLog from '@components/main/VisitLog';
import { Model } from '~/types/database/utils';

interface MainProps {
  initialVisitLogs: Model<'visitLog'>[];
}

const Main = ({ initialVisitLogs }: MainProps) => {
  const [visitLogs, setVisitLogs] =
    useState<Model<'visitLog'>[]>(initialVisitLogs);

  const numOfFavoriteVisitLogs = visitLogs.filter(
    visitLog => visitLog.isFavorite,
  ).length;

  return (
    <Wrapper>
      <MainHeader />
      <Body>
        {visitLogs.length ? (
          <VisitLogList>
            {visitLogs.map(visitLog => (
              <VisitLog key={visitLog.id} visitLog={visitLog} />
            ))}
          </VisitLogList>
        ) : (
          <Empty />
        )}
        {/* <Buttons /> */}
      </Body>
      {!!numOfFavoriteVisitLogs && (
        <Link href={pathnames.compareVisitLog}>
          <CompareButton backgroundColor={colors.mint} fontColor={colors.white}>
            비교하기 ({numOfFavoriteVisitLogs})
          </CompareButton>
        </Link>
      )}
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  padding-top: ${HEADER_HEIGHT}rem;
`;
const Body = styled.main`
  background: #fbfbfb;
  padding: 2rem 2rem 4rem 2rem;
  min-height: calc(100vh - ${HEADER_HEIGHT}rem);
`;
const VisitLogList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const CompareButton = styled(RoundButton)`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 4rem;
  z-index: ${elevations.footer};
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2);
`;
