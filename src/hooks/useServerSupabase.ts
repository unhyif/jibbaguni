import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import { Database } from '~/types/database/database';

interface UseServerSupabaseProps {}

export const useServerSupabase = (cookies: ReadonlyRequestCookies) => {
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookies,
  });
  return { supabase };
};
