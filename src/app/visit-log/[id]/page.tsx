'use client';

import Header from '@components/designSystem/Header';
import styled from 'styled-components';
import { HeaderHeight } from '@styles/constants';
import { Elevations } from '@styles/designSystem/elevations';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { Colors } from '@styles/designSystem/colors';
import { MOCK_VISIT_LOG } from '@constants/mockData';
import { formatPrice, formatTransactionType } from '@utils/VisitLog';
import FormField from '@components/designSystem/FormField';
import { TransactionTypes } from '@constants/enums';
import Chip from '@components/designSystem/Chip';
import { queryKeys } from '~/queries/queryKeys';
import { ValueOf } from '~/types/utils';

interface VisitLogProps {}

const VisitLog = (props: VisitLogProps) => {
  const { id } = useParams();

  const { data } = useQuery(queryKeys.visitLog.getVisitLogAPI(Number(id)));
  const { address, transactionType, price, monthly, maintenanceCost, link } =
    MOCK_VISIT_LOG ?? {};

  return (
    <Wrapper>
      <Header title="자세히 보기  🔍" />
      <Body>
        <Top>
          <Address>{address?.addressStr}</Address>
          <Price>
            {formatPrice({ transactionType, price, monthly, maintenanceCost })}
          </Price>
        </Top>
        <Border />
        <Bottom>
          <FormField label="URL">
            <Link href={link} target="_blank">
              {link}
            </Link>
          </FormField>
          <FormField label="주소">
            <Text>{address?.addressStr}</Text>
          </FormField>
          <FormField label="거래 유형">
            <TransactionTypeList>
              {Object.keys(TransactionTypes).map(type => (
                <Chip
                  label={formatTransactionType(
                    type as ValueOf<typeof TransactionTypes>,
                  )}
                  isActive={type === transactionType}
                />
              ))}
            </TransactionTypeList>
          </FormField>
          <FormField label="보증금">
            <Text>{price.toLocaleString()}만원</Text>
          </FormField>
        </Bottom>
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
`;
const TransactionTypeList = styled.ul`
  display: flex;
  gap: 8px;
`;
const Price = styled.strong`
  color: ${Colors.primary};
  font-size: 2.4rem;
  font-weight: 600;
`;
const Border = styled.hr`
  background: ${Colors.weakGrey};
  width: calc(100% - 4rem);
  margin: 0 auto;
  height: 1px;
`;
const Bottom = styled.section`
  padding: 2rem 2rem 9.6rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
const Text = styled.span`
  font-weight: 500;
  line-height: 2.4rem;
`;
const Link = styled.a`
  color: ${Colors.mint};
  text-decoration-line: underline;
`;
const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  z-index: ${Elevations.footer};
  height: 5.6rem;
  display: flex;
`;
