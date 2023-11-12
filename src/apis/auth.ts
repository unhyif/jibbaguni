import API from '@apis/index';
import { User } from '~/types/User';

export const getUserAPI = async () => {
  const res = await API.get<User>('/auth/user');
  return res.data;
};
