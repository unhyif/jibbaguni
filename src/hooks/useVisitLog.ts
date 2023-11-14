import { CreateVisitLogAPIArgs, UpdateVisitLogAPIArgs } from '@apis/visit-log';

interface UseVisitLogProps {}

export const useVisitLog = () => {
  const create = async (args: CreateVisitLogAPIArgs) => {};

  const update = async (visitLogId: number, args: UpdateVisitLogAPIArgs) => {};

  const remove = async (visitLogId: number) => {};

  return {
    create,
    update,
    remove,
  };
};
