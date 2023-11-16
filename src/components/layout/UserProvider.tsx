'use client';

import { PropsWithChildren, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSetAtom } from 'jotai';
import { clientSupabase } from '@utils/supabase';
import { userAtom } from '~/jotai/states';
import { User } from '~/types/User';

interface UserProviderProps {
  user: User | null;
  accessToken: string | null;
}

const UserProvider = (props: PropsWithChildren<UserProviderProps>) => {
  const { user, accessToken, children } = props;

  const router = useRouter();

  const setUser = useSetAtom(userAtom);

  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [user]);

  useEffect(() => {
    const {
      data: { subscription: authListener },
    } = clientSupabase.auth.onAuthStateChange((_, session) => {
      const updatedAccessToken = session?.access_token ?? null;
      if (typeof updatedAccessToken !== typeof accessToken) {
        router.refresh();
      }
    });

    return () => {
      authListener.unsubscribe();
    };
  }, [accessToken]);

  return children;
};

export default UserProvider;
