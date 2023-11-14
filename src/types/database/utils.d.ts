import { $Enums, Prisma } from '.prisma/client';
import { getPrisma } from '@utils/prisma';
import { Operation } from '@prisma/client/runtime/library';
import Args = Prisma.Args;
import ModelName = Prisma.ModelName;

export type Model<M extends ModelName> = Prisma[M];
export { $Enums as Enums };

export type OperationArgs<M extends ModelName, O extends Operation> = Args<
  ReturnType<typeof getPrisma>[M],
  O
>['data'];
