import { EnumObject } from '~/types/utils';
import { Enums } from '~/types/database/utils';

export const Directions: EnumObject<Enums.directionEnum> = {
  EAST: 'EAST',
  WEST: 'WEST',
  SOUTH: 'SOUTH',
  NORTH: 'NORTH',
};

export const Furnitures: EnumObject<Enums.furnitureNameEnum> = {
  AIR_CONDITIONER: 'AIR_CONDITIONER',
  BED: 'BED',
  CLOSET: 'CLOSET',
  DESK: 'DESK',
  FRIDGE: 'FRIDGE',
  INDUCTION: 'INDUCTION',
  MICROWAVE: 'MICROWAVE',
  SHOE_CLOSET: 'SHOE_CLOSET',
  SINK: 'SINK',
  STOVE: 'STOVE',
  TV: 'TV',
  WASHING_MACHINE: 'WASHING_MACHINE',
};

export const TransactionTypes: EnumObject<Enums.transactionTypeEnum> = {
  MONTHLY_RENT: 'MONTHLY_RENT',
  JEONSE: 'JEONSE',
  SALE: 'SALE',
};
