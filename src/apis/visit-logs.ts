import API from '@apis/index';
import { VisitLog } from '~/types/VisitLog';

export const getMyVisitLogsAPI = async () => {
  const res = await API.get<VisitLog[]>('/visit-logs/user');
  return res.data;
};

export const deleteVisitLogAPI = async (visitLogId: number) => {
  const res = await API.delete(`/visit-logs/${visitLogId}`);
  return res.data;
};
