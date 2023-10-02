import {
  createClientComponentClient,
  createServerComponentClient,
} from '@supabase/auth-helpers-nextjs';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import { Database } from '~/types/database/database';

export const clientSupabase = createClientComponentClient<Database>();
export const getServerSupabase = (cookies: ReadonlyRequestCookies) =>
  createServerComponentClient<Database>({
    cookies: () => cookies,
  });

export const getTimestamp = () => new Date().toISOString();
