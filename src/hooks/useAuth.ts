import { useRouter } from 'next/navigation';
import { useClientSupabase } from '@hooks/useClientSupabase';
import { routerPathnames } from '@constants/url/routerPathnames';

interface UseAuthProps {}

export const useAuth = () => {
  const router = useRouter();
  const { supabase } = useClientSupabase();

  const signUp = async (email: string, password: string) => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}${routerPathnames.authCallback}`,
      },
    });
  };

  const signIn = async (email: string, password: string) => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return { signUp, signIn, signOut };
};
