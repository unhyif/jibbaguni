'use client';

import styled from 'styled-components';
import { HeaderHeight } from '@styles/constants';
import MainHeader from '@components/main/MainHeader';
import RoundButton from '@components/designSystem/RoundButton';
import { Elevations } from '@styles/designSystem/elevations';
import { Colors } from '@styles/designSystem/colors';
import Link from 'next/link';
import { Pathnames } from '@constants/pathnames';
import Empty from '@components/main/Empty';
import VisitLogItem from '@components/main/VisitLogItem';
import { useVisitLogOperation } from '@hooks/useVisitLogOperation';
import { useVisitLogs } from '@components/main/hooks/useVisitLogs';
import { VisitLog } from '~/types/VisitLog';

interface MainProps {
  initialVisitLogs: VisitLog[];
}

const Main = ({ initialVisitLogs }: MainProps) => {
  const { visitLogs, handleVisitLogs } = useVisitLogs(initialVisitLogs);

  const { like } = useVisitLogOperation();

  const handleClickVisitLogLike = async (id: number, to: boolean) => {
    await like(id, to);
    handleVisitLogs(prev =>
      prev.map(visitLog =>
        visitLog.id === id ? { ...visitLog, isFavorite: to } : visitLog,
      ),
    );
  };

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
              <Link href={Pathnames.visitLog(visitLog.id)}>
                <VisitLogItem
                  key={visitLog.id}
                  visitLog={visitLog}
                  onClickLike={handleClickVisitLogLike}
                />
              </Link>
            ))}
          </VisitLogList>
        ) : (
          <Empty />
        )}
        {/* <Buttons /> */}
      </Body>

      {!!numOfFavoriteVisitLogs && (
        <Link href={Pathnames.visitLogCompare}>
          <CompareButton backgroundColor={Colors.mint} fontColor={Colors.white}>
            비교하기 ({numOfFavoriteVisitLogs})
          </CompareButton>
        </Link>
      )}
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  padding-top: ${HeaderHeight}rem;
`;
const Body = styled.main`
  background: #fbfbfb;
  padding: 2rem 2rem 4rem 2rem;
  min-height: calc(100vh - ${HeaderHeight}rem);
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
  z-index: ${Elevations.footer};
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2);
`;
