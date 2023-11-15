import {
  CreateVisitLogAPIArgs,
  UpdateVisitLogAPIArgs,
  updateVisitLogLikeAPI,
} from '@apis/visit-log';

interface UseVisitLogOperationProps {}

export const useVisitLogOperation = () => {
  const create = async (args: CreateVisitLogAPIArgs) => {};

  const update = async (visitLogId: number, args: UpdateVisitLogAPIArgs) => {};

  const remove = async (visitLogId: number) => {};

  const like = async (visitLogId: number, to: boolean) => {
    await updateVisitLogLikeAPI(visitLogId, to);
  };

  return {
    create,
    update,
    remove,
    like,
  };
};
