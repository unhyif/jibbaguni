import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '~/types/database';

interface UseClientSupabaseProps {}

export const useClientSupabase = () => {
  const supabase = createClientComponentClient<Database>();
  return { supabase };
};
