import { getPrisma } from '@utils/prisma';
import { getSessionInRouterHandler } from '@utils/supabase';
import { cookies } from 'next/headers';
import { ErrorStatus } from '@constants/error';

const prisma = getPrisma();

export const GET = async () => {
  const session = await getSessionInRouterHandler(cookies());
  const user = session?.user;

  if (!user) {
    return Response.json(null, { status: ErrorStatus.unauthorized });
  }

  const res = await prisma.userProfile.findUnique({ where: { id: user.id } });
  return Response.json(res);
};
