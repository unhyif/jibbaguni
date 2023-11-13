import { CreateVisitLogAPIArgs } from '@app/visit-logs/route';
import { UpdateVisitLogAPIArgs } from '@app/visit-logs/[id]/route';

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
