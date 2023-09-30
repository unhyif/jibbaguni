import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { Database } from '~/types/database';
import { routerPathnames } from '~/constants/url/routerPathnames';

export const dynamic = 'force-dynamic';

export const POST = async (request: Request) => {
  const requestUrl = new URL(request.url);
  const supabase = createRouteHandlerClient<Database>({ cookies });

  await supabase.auth.signOut();

  return NextResponse.redirect(requestUrl.origin, 301);
};
