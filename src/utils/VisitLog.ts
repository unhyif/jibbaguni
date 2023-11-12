import { TransactionTypes } from '@constants/enums';
import { ValueOf } from '~/types/utils';

export const formatTransactionType = (
  transactionType: ValueOf<typeof TransactionTypes>,
) => {
  switch (transactionType) {
    case TransactionTypes.MONTHLY_RENT:
      return '월세';
    case TransactionTypes.JEONSE:
      return '전세';
    case TransactionTypes.SALE:
      return '매매';
  }
};

export const calculate평fromM2 = (m2: number) =>
  Number((m2 / 3.305785).toFixed(1));
