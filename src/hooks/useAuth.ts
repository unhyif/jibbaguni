import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/router';
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
    router.reload();
  };

  const signIn = async (email: string, password: string) => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.reload();
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    router.reload();
  };

  return { signUp, signIn, signOut };
};
