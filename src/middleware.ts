import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { Database } from '~/types/database/database';

export const middleware = async (req: NextRequest) => {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>(
    { req, res },
    {
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    },
  );
  await supabase.auth.getSession();
  return res;
};

// export const config = {
//   matcher: [],
// };
