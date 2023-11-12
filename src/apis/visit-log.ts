import API from '@apis/index';
import { VisitLog } from '~/types/VisitLog';

export const getMyVisitLogsAPI = async () => {
  const res = await API.get<VisitLog[]>('/visit-Log/user');
  return res.data;
};
