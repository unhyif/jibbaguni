'use client';

import { PropsWithChildren, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { userProfileAtom } from '@recoil/states';
import { clientSupabase } from '@utils/supabase';
import { Model } from '~/types/database/utils';

interface UserProfileProviderProps {
  accessToken: string | null;
  userProfile: Model<'userProfile'> | null;
}

const UserProfileProvider = (
  props: PropsWithChildren<UserProfileProviderProps>,
) => {
  const { accessToken, userProfile, children } = props;

  const router = useRouter();

  const setUserProfile = useSetRecoilState(userProfileAtom);
  const resetUserProfile = useResetRecoilState(userProfileAtom);

  useEffect(() => {
    const {
      data: { subscription: authListener },
    } = clientSupabase.auth.onAuthStateChange((_, session) => {
      const updatedAccessToken = session?.access_token ?? null;
      if (updatedAccessToken !== accessToken) {
        router.refresh();
      }
    });

    return () => {
      authListener.unsubscribe();
    };
  }, [accessToken]);

  useEffect(() => {
    if (userProfile) {
      setUserProfile(userProfile);
    } else {
      resetUserProfile();
    }
  }, [userProfile]);

  return children;
};

export default UserProfileProvider;
