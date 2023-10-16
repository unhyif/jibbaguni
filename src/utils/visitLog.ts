import { transactionTypes } from '@constants/schema';
import { ValueOf } from '~/types/utils';

export const formatTransactionType = (
  transactionType: ValueOf<typeof transactionTypes>,
) => {
  switch (transactionType) {
    case transactionTypes.MONTHLY_RENT:
      return '월세';
    case transactionTypes.JEONSE:
      return '전세';
    case transactionTypes.SALE:
    default:
      return '매매';
  }
};
