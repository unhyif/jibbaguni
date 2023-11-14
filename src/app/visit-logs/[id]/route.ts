import { getSessionInRouterHandler } from '@utils/supabase';
import { cookies } from 'next/headers';
import { ErrorCodes, ErrorStatus } from '@constants/error';
import { getPrisma } from '@utils/prisma';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

const prisma = getPrisma();

export const PATCH = async (
  req: Request,
  { params }: { params: { id: number } },
) => {
  const session = await getSessionInRouterHandler(cookies());
  const user = session?.user;

  if (!user) {
    return Response.json(null, { status: ErrorStatus.unauthorized });
  }

  const { id } = params;
  const args = await req.json();
  try {
    const res = await prisma.visitLog.update({
      where: { userProfileId: user.id, id },
      data: args,
    });
    return Response.json(res);
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError) {
      if (e.code === ErrorCodes.notExist) {
        return Response.json(null, { status: ErrorStatus.notExist });
      }
    }
  }
};

export const DELETE = async (
  req: Request,
  { params }: { params: { id: number } },
) => {
  const session = await getSessionInRouterHandler(cookies());
  const user = session?.user;

  if (!user) {
    return Response.json(null, { status: ErrorStatus.unauthorized });
  }

  const { id } = params;
  try {
    const res = await prisma.visitLog.delete({
      where: { userProfileId: user.id, id },
    });
    return Response.json(res);
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError) {
      if (e.code === ErrorCodes.notExist) {
        return Response.json(null, { status: ErrorStatus.notExist });
      }
    }
  }
};
