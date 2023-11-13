import {
  directionEnum,
  furnitureNameEnum,
  transactionTypeEnum,
} from '@prisma/client';
import { EnumObject } from '~/types/utils';

export const Directions: EnumObject<directionEnum> = {
  EAST: 'EAST',
  WEST: 'WEST',
  SOUTH: 'SOUTH',
  NORTH: 'NORTH',
};

export const Furnitures: EnumObject<furnitureNameEnum> = {
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

export const TransactionTypes: EnumObject<transactionTypeEnum> = {
  MONTHLY_RENT: 'MONTHLY_RENT',
  JEONSE: 'JEONSE',
  SALE: 'SALE',
};
