import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '~/types/database';

interface UseServerSupabaseProps {}

export const useServerSupabase = () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  return { supabase };
};
