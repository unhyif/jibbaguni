import { getSessionInRouterHandler } from '@utils/supabase';
import { cookies } from 'next/headers';
import { errorStatus } from '@constants/error';
import { getPrisma } from '@utils/prisma';

const prisma = getPrisma();

export const DELETE = async (
  req: Request,
  { params }: { params: { id: number } },
) => {
  const session = await getSessionInRouterHandler(cookies());
  const user = session?.user;
  if (user) {
    const { id } = params;
    const res = await prisma.visitLog.delete({
      where: { userProfileId: user.id, id },
    });
    return res;
  }
  return Response.json(null, { status: errorStatus.unauthorized });
};
