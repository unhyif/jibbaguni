import styled from 'styled-components';
import { TextEllipsis } from '@styles/mixins';
import { colors } from '@styles/designSystem/colors';
import HeartUnFilled from '@assets/svgs/ion_heart-outline.svg';
import HeartFilled from '@assets/svgs/ion_heart-sharp.svg';
import dayjs from 'dayjs';
import { Model } from '~/types/database/utils';

interface VisitLogProps {
  visitLog: Model<'visitLog'>;
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

  return (
    <Wrapper>
      <Text>
        <CreatedAt>{dayjs(createdAt).format('YY.MM.DD')}</CreatedAt>
        {address?.addressStr && <Address>{address.addressStr}</Address>}
        <Price>월세 1,000/57 + 관리비 7</Price>
        <Area>전용면적 약 7평</Area>
      </Text>

      <button>
        <HeartFilled width={28} height={28} />
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
