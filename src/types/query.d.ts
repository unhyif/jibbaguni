import type { QueryKey } from '@tanstack/query-core';

export type QueryKeysType = Record<string, DomainQueryKeysType>;

export type DomainQueryKeysType = Record<
  string,
  | RequiredQueryOptionsInterface
  | ((...args: any[]) => RequiredQueryOptionsInterface)
>;

export interface RequiredQueryOptionsInterface {
  queryKey: QueryKey;
  queryFn: (...args: any[]) => Promise;
}
