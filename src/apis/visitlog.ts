import API from '~/apis';
import { VisitLog } from '~/types/VisitLog';

export const getMyVisitLogsAPI = async () => {
  const res = await API.get<VisitLog[]>('/visitLog/user');
  return res.data;
};
