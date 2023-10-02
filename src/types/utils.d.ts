export type ValueOf<T> = T[keyof T];
export type ObjectWithFixedKeys<T, U> = { [key in T]: U };
