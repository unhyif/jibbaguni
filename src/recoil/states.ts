import { atom } from 'recoil';
import { recoilKeys } from '@recoil/keys';
import { Model } from '~/types/database/supabase';

export const userProfileAtom = atom<Model<'userProfile'> | null>({
  key: recoilKeys.userProfile,
  default: null,
});
