import { useQuery, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '~/queries/queryKeys';
import { VisitLog } from '~/types/VisitLog';

interface UseVisitLogProps {}

export const useVisitLog = (visitLogId: number) => {
  const queryClient = useQueryClient();
  const { data } = useQuery(queryKeys.visitLog.getVisitLogAPI(visitLogId));

  const handleVisitLog = (visitLog: VisitLog) =>
    queryClient.setQueryData(
      queryKeys.visitLog.getVisitLogAPI(visitLogId).queryKey,
      prev => visitLog,
    );

  return { visitLog: data, handleVisitLog };
};
