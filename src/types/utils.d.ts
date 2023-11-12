export type ValueOf<T> = T[keyof T];
export type EnumObject<T> = { [key in T]: key };
