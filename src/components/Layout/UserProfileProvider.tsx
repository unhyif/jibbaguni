'use client';

import { PropsWithChildren, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useClientSupabase } from '@hooks/useClientSupabase';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { userProfileAtom } from '@recoil/states';
import { Session } from '@supabase/gotrue-js';

interface UserProfileProviderProps {
  session: Session | null;
}

const UserProfileProvider = ({
  session,
  children,
}: PropsWithChildren<UserProfileProviderProps>) => {
  const router = useRouter();
  const { supabase } = useClientSupabase();

  const setUserProfile = useSetRecoilState(userProfileAtom);
  const resetUserProfile = useResetRecoilState(userProfileAtom);

  const getUserProfile = async () => {
    const { data } = await supabase
      .from('userProfile')
      .select('*')
      .eq('id', session?.user.id);
    const userProfile = data?.[0] ?? null;
    return userProfile;
  };

  useEffect(() => {
    const previousAccessToken = session?.access_token;
    const {
      data: { subscription: authListener },
    } = supabase.auth.onAuthStateChange((_, session) => {
      if (session?.access_token !== previousAccessToken) {
        router.refresh();
      }
    });

    return () => {
      authListener.unsubscribe();
    };
  }, [session]);

  useEffect(() => {
    if (session) {
      getUserProfile().then((userProfile) => setUserProfile(userProfile));
    } else {
      resetUserProfile();
    }
  }, [session]);

  return children;
};

export default UserProfileProvider;
