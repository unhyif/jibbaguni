import { atom } from 'recoil';
import { recoilKeys } from '@recoil/keys';
import { UserProfile } from '~/types/UserProfile';

export const userProfileAtom = atom<UserProfile | null>({
  key: recoilKeys.userProfile,
  default: null,
});
