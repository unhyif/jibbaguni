import { getSessionInRouterHandler } from '@utils/supabase';
import { cookies } from 'next/headers';
import { ErrorStatus } from '@constants/error';
import { getPrisma } from '@utils/prisma';
import { Prisma } from '@prisma/client/extension';
import Args = Prisma.Args;

const prisma = getPrisma();

export type CreateVisitLogAPIArgs = Args<
  typeof prisma.visitLog,
  'create'
>['data'];

export const POST = async (req: Request) => {
  const session = await getSessionInRouterHandler(cookies());
  const user = session?.user;

  if (!user) {
    return Response.json(null, { status: ErrorStatus.unauthorized });
  }

  const args = await req.json();
  const res = await prisma.visitLog.create({
    data: {
      ...args,
      userProfile: {
        connect: { id: user.id },
      },
    },
  });
  return res;
};
