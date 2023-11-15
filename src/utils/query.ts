import { QueryClient } from '@tanstack/react-query';
import type { DomainQueryKeysType, QueryKeysType } from '~/types/query';

export const getQueryClient = () => new QueryClient();

export const createQueryKeys = <T extends DomainQueryKeysType>(queryKeys: T) =>
  queryKeys;

export const mergeQueryKeys = <T extends QueryKeysType>(queryKeys: T) => {
  for (const [domain, domainQueryKeys] of Object.entries(queryKeys)) {
    for (const [api, previousValue] of Object.entries(domainQueryKeys)) {
      if (typeof previousValue === 'object') {
        // 객체일 때의 queryKey 변경
        const previousQueryKey = previousValue.queryKey;
        domainQueryKeys[api] = {
          ...previousValue,
          queryKey: [domain, api, ...previousQueryKey],
        };
      } else if (typeof previousValue === 'function') {
        // 함수일 때의 queryKey 변경
        domainQueryKeys[api] = (...args: any[]) => {
          const previousQueryOptions = previousValue(...args);
          const previousQueryKey = previousQueryOptions.queryKey;
          return {
            ...previousQueryOptions,
            queryKey: [domain, api, ...previousQueryKey],
          };
        };
      } else {
        throw new Error(`Invalid format for queryKeys.${domain}.${api}`);
      }
    }
  }

  return queryKeys;
};
