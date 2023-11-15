import { $Enums, Prisma } from '@prisma/client';
import { getPrisma } from '@utils/prisma';
import { DefaultSelection, Operation } from '@prisma/client/runtime/library';
import Args = Prisma.Args;
import ModelName = Prisma.ModelName;
import TypeMap = Prisma.TypeMap;

export type Model<M extends ModelName> = DefaultSelection<
  TypeMap['model'][M]['payload']
>;
export { $Enums as Enums };

export type OperationArgs<M extends ModelName, O extends Operation> = Args<
  ReturnType<typeof getPrisma>[M],
  O
>['data'];
