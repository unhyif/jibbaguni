import { atom } from 'recoil';
import { RecoilKeys } from '@recoil/keys';
import { User } from '~/types/User';

export const userAtom = atom<User | null>({
  key: RecoilKeys.user,
  default: null,
});
