import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Database } from '~/types/database';
import { routerPathnames } from '~/constants/url/routerPathnames';

interface UseAuthProps {}

export const useAuth = () => {
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const signUp = async (email: string, password: string) => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}${routerPathnames.authCallback}`,
      },
    });
    router.refresh();
  };

  const signIn = async (email: string, password: string) => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.refresh();
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  useEffect(() => {
    const getSession = async () => {
      const { data: session } = await supabase.auth.getSession();
      console.log(session);
    };
    getSession();
  }, [supabase]);

  return { signUp, signIn, signOut };
};
