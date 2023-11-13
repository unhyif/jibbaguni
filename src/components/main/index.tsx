'use client';

import styled from 'styled-components';
import { HeaderHeight } from '@styles/constants';
import MainHeader from '@components/main/MainHeader';
import { useState } from 'react';
import RoundButton from '@components/designSystem/RoundButton';
import { Elevations } from '@styles/designSystem/elevations';
import { Colors } from '@styles/designSystem/colors';
import Link from 'next/link';
import { Pathnames } from '@constants/pathnames';
import Empty from '@components/main/Empty';
import VisitLogItem from '@components/main/VisitLogItem';
import { getCurrentDate } from '@utils/supabase';
import { TransactionTypes } from '@constants/enums';
import { useVisitLog } from '@hooks/useVisitLog';
import { VisitLog } from '~/types/VisitLog';

interface MainProps {
  initialVisitLogs: VisitLog[];
}

const MOCK_VISIT_LOGS: VisitLog[] = [
  {
    address: {
      addressStr:
        '서울특별시 관악구 봉천동, 서울특별시 관악구 봉천동, 서울특별시 관악구 봉천동, 서울특별시 관악구 봉천동, 서울특별시 관악구 봉천동, 관악구 봉천동,',
    },
    createdAt: getCurrentDate(),
    transactionType: TransactionTypes.MONTHLY_RENT,
    price: 1000,
    monthly: 50,
    maintenanceCost: 7,
    exclusiveArea: 21.4,
    isFavorite: true,
  },
  {
    createdAt: getCurrentDate(),
    transactionType: TransactionTypes.JEONSE,
    price: 1000,
    exclusiveArea: 16.2,
    isFavorite: false,
  },
  {
    address: {
      addressStr:
        '서울특별시 관악구 봉천동, 서울특별시 관악구 봉천동, 서울특별시 관악구 봉천동, 서울특별시 관악구 봉천동, 서울특별시 관악구 봉천동, 관악구 봉천동,',
    },
    createdAt: getCurrentDate(),
    transactionType: TransactionTypes.SALE,
    price: 20000,
    maintenanceCost: 7,
    exclusiveArea: 34.8,
    isFavorite: true,
  },
];

const Main = ({ initialVisitLogs }: MainProps) => {
  const [visitLogs, setVisitLogs] = useState<VisitLog[]>(MOCK_VISIT_LOGS);

  const { update } = useVisitLog();
  const handleClickVisitLogLike = async (id: number, to: boolean) => {
    await update(id, { isFavorite: to });
    setVisitLogs(prev =>
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
              <VisitLogItem
                key={visitLog.id}
                visitLog={visitLog}
                onClickLike={handleClickVisitLogLike}
              />
            ))}
          </VisitLogList>
        ) : (
          <Empty />
        )}
        {/* <Buttons /> */}
      </Body>
      {!!numOfFavoriteVisitLogs && (
        <Link href={Pathnames.visitLogsCompare}>
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
