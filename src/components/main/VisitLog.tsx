import styled from 'styled-components';
import { TextEllipsis } from '@styles/mixins';
import { colors } from '@styles/designSystem/colors';
import HeartUnFilled from '@assets/svgs/ph_heart-light.svg';
import HeartFilled from '@assets/svgs/ph_heart-fill.svg';
import dayjs from 'dayjs';
import { transactionTypes } from '@constants/schema';
import { formatTransactionType } from '@utils/visitLog';
import { VisitLogType } from '~/types/visitLog';

interface VisitLogProps {
  visitLog: VisitLogType;
}

const VisitLog = (props: VisitLogProps) => {
  const {
    createdAt,
    address,
    transactionType,
    price,
    monthly,
    maintenanceCost,
    exclusiveArea,
    isFavorite,
  } = props.visitLog;

  const formatPrice = () => {
    switch (transactionType) {
      case transactionTypes.MONTHLY_RENT: {
        const prices = price ? [price.toLocaleString(), monthly] : [monthly];
        const formattedMaintenanceCost = maintenanceCost
          ? ` + 관리비 ${maintenanceCost}`
          : '';
        return `${formatTransactionType(transactionType)} ${prices.join(
          '/',
        )}${formattedMaintenanceCost}`;
      }

      case transactionTypes.JEONSE:
      case transactionTypes.SALE:
      default: {
        const formattedMaintenanceCost = maintenanceCost
          ? ` + 관리비 ${maintenanceCost}`
          : '';
        return `${formatTransactionType(
          transactionType,
        )} ${price.toLocaleString()}${formattedMaintenanceCost}`;
      }
    }
  };

  return (
    <Wrapper>
      <Text>
        <CreatedAt>{dayjs(createdAt).format('YY.MM.DD')}</CreatedAt>
        {address?.addressStr && <Address>{address.addressStr}</Address>}
        <Price>{formatPrice()}</Price>
        <Area>전용면적 약 {exclusiveArea}평</Area>
      </Text>

      <button>
        {isFavorite ? (
          <HeartFilled width={28} height={28} />
        ) : (
          <HeartUnFilled width={28} height={28} />
        )}
      </button>
    </Wrapper>
  );
};

export default VisitLog;

const Wrapper = styled.li`
  display: flex;
  gap: 1.2rem;
  justify-content: space-between;
  align-items: flex-end;
  background: ${colors.white};
  padding: 1.2rem 1.6rem;
  border-radius: 1.2rem;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
`;
const CreatedAt = styled.span`
  font-size: 1.2rem;
  color: #a5a5a5;
`;
const Address = styled.h5`
  font-size: 1.3rem;
  font-weight: 600;
  ${TextEllipsis()};
  line-height: 2rem;
  margin: 0.4rem 0;
`;
const Price = styled.strong`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${colors.primary};
`;
const Area = styled.span`
  font-size: 1.2rem;
`;
