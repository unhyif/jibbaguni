import { CreateVisitLogAPIArgs } from '@app/visit-logs/route';
import { EditVisitLogAPIArgs } from '@app/visit-logs/[id]/route';

interface UseVisitLogProps {}

export const useVisitLog = () => {
  const create = async (args: CreateVisitLogAPIArgs) => {};

  const edit = async (visitLogId: number, args: EditVisitLogAPIArgs) => {};

  const remove = async (visitLogId: number) => {};

  return {
    create,
    edit,
    remove,
  };
};
