import { TransactionTypes } from '@constants/enums';
import { ValueOf } from '~/types/utils';

export const formatPrice = (args: {
  transactionType: ValueOf<typeof TransactionTypes>;
  price: number | null;
  monthly: number | null;
  maintenanceCost: number | null;
}) => {
  const { transactionType, price, monthly, maintenanceCost } = args;

  switch (transactionType) {
    case TransactionTypes.MONTHLY_RENT: {
      const prices = [price, monthly].map(value => value?.toLocaleString());
      const formattedPrices = prices.join('/');
      const formattedMaintenanceCost = maintenanceCost
        ? `+ 관리비 ${maintenanceCost.toLocaleString()}`
        : '';
      return `${formatTransactionType(
        transactionType,
      )} ${formattedPrices} ${formattedMaintenanceCost}`;
    }

    case TransactionTypes.JEONSE:
    case TransactionTypes.SALE:
    default: {
      const formattedMaintenanceCost = maintenanceCost
        ? `+ 관리비 ${maintenanceCost.toLocaleString()}`
        : '';
      return `${formatTransactionType(
        transactionType,
      )} ${price?.toLocaleString()} ${formattedMaintenanceCost}`;
    }
  }
};

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
