import API from '@apis/index';
import { VisitLog } from '~/types/VisitLog';
import { OperationArgs } from '~/types/database/utils';

export const getMyVisitLogsAPI = async () => {
  const res = await API.get<VisitLog[]>('/visit-log/user');
  return res.data;
};

export const getVisitLogAPI = async (visitLogId: number) => {
  const res = await API.get<VisitLog>(`/visit-log/${visitLogId}`);
  return res.data;
};

export type CreateVisitLogAPIArgs = OperationArgs<'visitLog', 'create'>;
export const createVisitLogAPI = async (args: CreateVisitLogAPIArgs) => {
  const res = await API.post<VisitLog>('/visit-log', args);
  return res.data;
};

export type UpdateVisitLogAPIArgs = OperationArgs<'visitLog', 'update'>;
export const updateVisitLogAPI = async (
  visitLogId: number,
  args: UpdateVisitLogAPIArgs,
) => {
  const res = await API.patch<VisitLog>(`/visit-log/${visitLogId}`, args);
  return res.data;
};

export const deleteVisitLogAPI = async (visitLogId: number) => {
  const res = await API.delete<VisitLog>(`/visit-log/${visitLogId}`);
  return res.data;
};

export const updateVisitLogLikeAPI = async (
  visitLogId: number,
  to: boolean,
) => {
  const res = await API.patch<VisitLog>(`/like/visit-log/${visitLogId}`, {
    isFavorite: to,
  });
  return res.data;
};
