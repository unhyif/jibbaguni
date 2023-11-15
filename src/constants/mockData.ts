import { getCurrentDate } from '@utils/date';
import { TransactionTypes } from '@constants/enums';

export const MOCK_VISIT_LOGS = [
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
    maintenanceCost: 10,
    exclusiveArea: 34.8,
    isFavorite: true,
  },
];
