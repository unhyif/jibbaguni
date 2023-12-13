'use client';

import Header from '@components/designSystem/Header';
import styled from 'styled-components';
import { HeaderHeight } from '@styles/constants';
import { Elevations } from '@styles/designSystem/elevations';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { Colors } from '@styles/designSystem/colors';
import { MOCK_VISIT_LOG } from '@constants/mockData';
import {
  calculate평fromM2,
  formatCanPark,
  formatDirection,
  formatHasElevator,
  formatPrice,
  formatPriceSummary,
  formatTransactionType,
} from '@utils/VisitLog';
import FormField from '@components/designSystem/FormField';
import { TransactionTypes } from '@constants/enums';
import Chip from '@components/designSystem/Chip';
import { queryKeys } from '~/queries/queryKeys';
import { ValueOf } from '~/types/utils';

interface VisitLogProps {}

const VisitLog = (props: VisitLogProps) => {
  const { id } = useParams();

  const { data } = useQuery(queryKeys.visitLog.getVisitLogAPI(Number(id)));
  const {
    address,
    transactionType,
    price,
    monthly,
    maintenanceCost,
    link,
    supplyArea,
    exclusiveArea,
    direction,
    furnitures,
    floor,
    hasElevator,
    canPark,
    memo,
    realEstate,
  } = MOCK_VISIT_LOG ?? {};

  return (
    <Wrapper>
      <Header title="자세히 보기  🔍" />

      <Body>
        <Top>
          <Address>
            <Emoji>🏠</Emoji>
            {address?.addressStr}
          </Address>
          <PriceSummary>
            <Emoji>💵</Emoji>
            {formatPriceSummary({
              transactionType,
              price,
              monthly,
              maintenanceCost,
            })}
          </PriceSummary>
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
            <Chips>
              {Object.keys(TransactionTypes).map(type => (
                <Chip
                  label={formatTransactionType(
                    type as ValueOf<typeof TransactionTypes>,
                  )}
                  isActive={type === transactionType}
                />
              ))}
            </Chips>
          </FormField>

          <FormField label={formatPrice(transactionType)}>
            <Text>{price?.toLocaleString()}만원</Text>
          </FormField>

          <FormField label={'월세'}>
            <Text>{monthly?.toLocaleString()}만원</Text>
          </FormField>

          <FormField label={'관리비'}>
            <Text>{maintenanceCost?.toLocaleString()}만원</Text>
          </FormField>

          <FormField label={'공급면적'}>
            <TextWrapper>
              <Text>{supplyArea}㎡</Text>
              <SubText>({calculate평fromM2(supplyArea)}평)</SubText>
            </TextWrapper>
          </FormField>

          <FormField label={'전용면적'}>
            <TextWrapper>
              <Text>{exclusiveArea}㎡</Text>
              <SubText>({calculate평fromM2(exclusiveArea)}평)</SubText>
            </TextWrapper>
          </FormField>

          <FormField label={'방향'}>
            <Text>{formatDirection(direction)}향</Text>
          </FormField>

          <FormField label={'옵션'} />

          <FormField label={'층'}>
            <Text>{floor}층</Text>
          </FormField>

          <FormField label={'엘리베이터'}>
            <Text>{formatHasElevator(hasElevator)}</Text>
          </FormField>

          <FormField label={'주차'}>
            <Text>{formatCanPark(canPark)}</Text>
          </FormField>

          <FormField label={'메모'}>
            <Text>{memo}</Text>
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
const Emoji = styled.span`
  font-size: 2.4rem;
  margin-right: 1rem;
`;
const Address = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
`;
const Chips = styled.ul`
  display: flex;
  gap: 0.8rem;
`;
const PriceSummary = styled.strong`
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
const TextWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
`;
const Text = styled.span`
  font-weight: 500;
  line-height: 2.4rem;
`;
const SubText = styled(Text)`
  color: ${Colors.midGrey};
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
