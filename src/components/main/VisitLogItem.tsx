import styled from 'styled-components';
import { TextEllipsis } from '@styles/mixins';
import { Colors } from '@styles/designSystem/colors';
import HeartUnFilled from '@assets/svgs/ph_heart-light.svg';
import HeartFilled from '@assets/svgs/ph_heart-fill.svg';
import dayjs from 'dayjs';
import { calculate평fromM2, formatPriceSummary } from '@utils/VisitLog';
import { MouseEventHandler } from 'react';
import { VisitLog } from '~/types/VisitLog';

interface VisitLogItemProps {
  visitLog: VisitLog;
  onClickLike: (id: number, to: boolean) => void;
}

const VisitLogItem = (props: VisitLogItemProps) => {
  const {
    id,
    createdAt,
    address,
    transactionType,
    price,
    monthly,
    maintenanceCost,
    exclusiveArea,
    isFavorite,
  } = props.visitLog;
  const { onClickLike } = props;

  const handleClickLike: MouseEventHandler<HTMLButtonElement> = e => {
    e.stopPropagation();
    onClickLike(id, !isFavorite);
  };

  return (
    <Wrapper>
      <Data>
        <CreatedAt>{dayjs(createdAt).format('YY.MM.DD')}</CreatedAt>
        {address?.addressStr && <Address>{address.addressStr}</Address>}
        <Price>
          {formatPriceSummary({
            transactionType,
            price,
            monthly,
            maintenanceCost,
          })}
        </Price>
        {exclusiveArea && (
          <Area>전용면적 약 {calculate평fromM2(exclusiveArea)}평</Area>
        )}
      </Data>

      <LikeButton onClick={handleClickLike}>
        {isFavorite ? (
          <HeartFilled width={28} height={28} />
        ) : (
          <HeartUnFilled width={28} height={28} />
        )}
      </LikeButton>
    </Wrapper>
  );
};

export default VisitLogItem;

const Wrapper = styled.li`
  display: flex;
  gap: 1.2rem;
  justify-content: space-between;
  align-items: flex-end;
  background: ${Colors.white};
  padding: 1.2rem 1.6rem;
  border-radius: 1.2rem;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
`;
const Data = styled.div`
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
  color: ${Colors.primary};
`;
const Area = styled.span`
  font-size: 1.2rem;
`;
const LikeButton = styled.button`
  width: 2.8rem;
  height: 2.8rem;
`;
