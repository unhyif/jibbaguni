import { atom } from 'recoil';
import { recoilKeys } from '@recoil/keys';
import { User } from '~/types/User';

export const userAtom = atom<User | null>({
  key: recoilKeys.user,
  default: null,
});
