import { routerPathnames } from '@constants/routerPathnames';
import { clientSupabase } from '@utils/supabase';

interface UseAuthProps {}

export const useAuth = () => {
  const signUp = async (email: string, password: string) => {
    await clientSupabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}${routerPathnames.authCallback}`,
      },
    });
  };

  const signIn = async (email: string, password: string) => {
    await clientSupabase.auth.signInWithPassword({
      email,
      password,
    });
  };

  const signOut = async () => {
    await clientSupabase.auth.signOut();
  };

  return { signUp, signIn, signOut };
};
