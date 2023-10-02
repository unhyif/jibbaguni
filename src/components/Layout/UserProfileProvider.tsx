'use client';

import { PropsWithChildren, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useClientSupabase } from '@hooks/useClientSupabase';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { userProfileAtom } from '@recoil/states';
import { Model } from '~/types/database/utils';

interface UserProfileProviderProps {
  accessToken: string | null;
  userProfile: Model<'userProfile'>;
}

const UserProfileProvider = ({
  accessToken,
  userProfile,
  children,
}: PropsWithChildren<UserProfileProviderProps>) => {
  const router = useRouter();
  const { supabase } = useClientSupabase();

  const setUserProfile = useSetRecoilState(userProfileAtom);
  const resetUserProfile = useResetRecoilState(userProfileAtom);

  useEffect(() => {
    const {
      data: { subscription: authListener },
    } = supabase.auth.onAuthStateChange((_, session) => {
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
