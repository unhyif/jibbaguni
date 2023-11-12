import { getPrisma } from '@utils/prisma';
import { getSessionInRouterHandler } from '@utils/supabase';
import { cookies } from 'next/headers';
import { ErrorStatus } from '@constants/error';

const prisma = getPrisma();

export const GET = async () => {
  const session = await getSessionInRouterHandler(cookies());
  const user = session?.user;
  if (user) {
    const res = await prisma.visitLog.findMany({
      where: { userProfileId: user.id },
      include: {
        images: true,
        furnitures: true,
      },
      orderBy: { createdAt: 'desc' },
    });
    return res;
  }
  return Response.json(null, { status: ErrorStatus.unauthorized });
};
