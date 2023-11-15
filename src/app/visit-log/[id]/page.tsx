'use client';

import Header from '@components/designSystem/Header';
import styled from 'styled-components';
import { HeaderHeight } from '@styles/constants';
import { Elevations } from '@styles/designSystem/elevations';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { Colors } from '@styles/designSystem/colors';
import { MOCK_VISIT_LOG } from '@constants/mockData';
import { formatPrice } from '@utils/VisitLog';
import { queryKeys } from '~/queries/queryKeys';

interface VisitLogProps {}

const VisitLog = (props: VisitLogProps) => {
  const { id } = useParams();

  const { data } = useQuery(queryKeys.visitLog.getVisitLogAPI(Number(id)));
  const { address, transactionType, price, monthly, maintenanceCost } =
    MOCK_VISIT_LOG ?? {};

  return (
    <Wrapper>
      <Header title="자세히 보기  🔍" />
      <Body>
        <Top>
          {address?.addressStr && <Address>{address?.addressStr}</Address>}
          <Price>
            {formatPrice({ transactionType, price, monthly, maintenanceCost })}
          </Price>
        </Top>
        <Bottom />
      </Body>
      <Footer />
    </Wrapper>
  );
};

export default VisitLog;

const Wrapper = styled.div`
  padding-top: ${HeaderHeight}rem;
`;
const Body = styled.main``;
const Top = styled.header`
  padding: 2.8rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
const Address = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 2.6rem;
`;
const Price = styled.strong`
  color: ${Colors.primary};
  font-size: 2.4rem;
  font-weight: 600;
`;
const Bottom = styled.section`
  padding: 2rem 2rem 9.6rem 2rem;
`;
const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  z-index: ${Elevations.footer};
  height: 5.6rem;
  display: flex;
`;
