import API from '@apis/index';
import { VisitLog } from '~/types/VisitLog';
import { OperationArgs } from '~/types/database/utils';

export const getMyVisitLogsAPI = async () => {
  const res = await API.get<VisitLog[]>('/visit-logs/user');
  return res.data;
};

export type CreateVisitLogAPIArgs = OperationArgs<'visitLog', 'create'>;
export const createVisitLogAPI = async (args: CreateVisitLogAPIArgs) => {
  const res = await API.post<VisitLog>('/visit-logs', args);
  return res.data;
};

export type UpdateVisitLogAPIArgs = OperationArgs<'visitLog', 'update'>;
export const updateVisitLogAPI = async (
  visitLogId: number,
  args: UpdateVisitLogAPIArgs,
) => {
  const res = await API.patch(`/visit-logs/${visitLogId}`, args);
  return res.data;
};

export const deleteVisitLogAPI = async (visitLogId: number) => {
  const res = await API.delete(`/visit-logs/${visitLogId}`);
  return res.data;
};
