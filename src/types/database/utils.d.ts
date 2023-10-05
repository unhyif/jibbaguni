import { Database } from '~/types/database/database';

type Tables = Database['public']['Tables'];
type Enums = Database['public']['Enums'];

export type Model<T extends keyof Tables> = Tables[T]['Row'];
export type Enum<T extends keyof Enums> = Enums[T];

export type InsertParams<T extends keyof Tables> = Tables[T]['Insert'];
export type UpdateParams<T extends keyof Tables> = Tables[T]['Update'];
