import {
  createVisitLogAPI,
  deleteVisitLogAPI,
  getMyVisitLogsAPI,
  getVisitLogAPI,
  updateVisitLogAPI,
  updateVisitLogLikeAPI,
} from '@apis/visit-log';
import { getUserAPI } from '@apis/auth';
import { createQueryKeys, mergeQueryKeys } from '@utils/query';

const authQueryKeys = createQueryKeys({
  getUserAPI: {
    queryKey: [],
    queryFn: getUserAPI,
  },
});

const likeQueryKeys = createQueryKeys({
  updateVisitLogLikeAPI: {
    queryKey: [],
    queryFn: updateVisitLogLikeAPI,
  },
});

const visitLogQueryKeys = createQueryKeys({
  getMyVisitLogsAPI: {
    queryKey: [],
    queryFn: getMyVisitLogsAPI,
  },
  getVisitLogAPI: (visitLogId: number) => ({
    queryKey: [visitLogId],
    queryFn: () => getVisitLogAPI(visitLogId),
  }),
  createVisitLogAPI: {
    queryKey: [],
    queryFn: createVisitLogAPI,
  },
  updateVisitLogAPI: {
    queryKey: [],
    queryFn: updateVisitLogAPI,
  },
  deleteVisitLogAPI: {
    queryKey: [],
    queryFn: (visitLogId: number) => deleteVisitLogAPI(visitLogId),
  },
});

export const queryKeys = mergeQueryKeys({
  auth: authQueryKeys,
  like: likeQueryKeys,
  visitLog: visitLogQueryKeys,
});
