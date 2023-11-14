import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import {
  CookieOptions,
  createBrowserClient,
  createServerClient,
} from '@supabase/ssr';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '~/types/database/database';

export const clientSupabase = createBrowserClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
);

export const getServerSupabase = (cookies: ReadonlyRequestCookies) =>
  createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
    {
      cookies: {
        get(name: string) {
          return cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          cookies.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          cookies.delete({ name, ...options });
        },
      },
    },
  );

export const getSessionInServer = async (cookies: ReadonlyRequestCookies) => {
  const supabase = getServerSupabase(cookies);
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return session;
};

export const getRouteHandlerSupabase = (cookies: ReadonlyRequestCookies) =>
  createRouteHandlerClient<Database>(
    { cookies: () => cookies },
    {
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
    },
  );

export const getSessionInRouterHandler = async (
  cookies: ReadonlyRequestCookies,
) => {
  const supabase = getRouteHandlerSupabase(cookies);
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return session;
};
