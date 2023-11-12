import { Enum } from '~/types/database/utils';
import { EnumObject } from '~/types/utils';

export const directions: EnumObject<Enum<'directionEnum'>> = {
  EAST: 'EAST',
  WEST: 'WEST',
  SOUTH: 'SOUTH',
  NORTH: 'NORTH',
};

export const furnitures: EnumObject<Enum<'furnitureNameEnum'>> = {
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

export const transactionTypes: EnumObject<Enum<'transactionTypeEnum'>> = {
  MONTHLY_RENT: 'MONTHLY_RENT',
  JEONSE: 'JEONSE',
  SALE: 'SALE',
};
