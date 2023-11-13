import API from '@apis/index';
import { CreateVisitLogAPIArgs } from '@app/visit-logs/route';
import { EditVisitLogAPIArgs } from '@app/visit-logs/[id]/route';
import { VisitLog } from '~/types/VisitLog';

export const getMyVisitLogsAPI = async () => {
  const res = await API.get<VisitLog[]>('/visit-logs/user');
  return res.data;
};

export const createVisitLogAPI = async (args: CreateVisitLogAPIArgs) => {
  const res = await API.post<VisitLog>('/visit-logs', args);
  return res.data;
};

export const editVisitLogAPI = async (
  visitLogId: number,
  args: EditVisitLogAPIArgs,
) => {
  const res = await API.patch(`/visit-logs/${visitLogId}`, args);
  return res.data;
};

export const deleteVisitLogAPI = async (visitLogId: number) => {
  const res = await API.delete(`/visit-logs/${visitLogId}`);
  return res.data;
};
