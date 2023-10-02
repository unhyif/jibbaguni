import { clientSupabase } from '@utils/supabase';
import { useRecoilValue } from 'recoil';
import { userProfileAtom } from '@recoil/states';
import { InsertParams, UpdateParams } from '~/types/database/utils';

interface UseVisitLogProps {}

export const useVisitLog = () => {
  const user = useRecoilValue(userProfileAtom);

  const insert = async (params: InsertParams<'visitLog'>) => {
    const insertedVisitLog = await clientSupabase
      .from('visitLog')
      .insert({
        ...params,
        userProfileId: user?.id ?? '',
      })
      .select();
    return insertedVisitLog;
  };

  const update = async (
    visitLogId: number,
    params: UpdateParams<'visitLog'>,
  ) => {
    const updatedVisitLog = await clientSupabase
      .from('visitLog')
      .update(params)
      .eq('id', visitLogId)
      .select();
    return updatedVisitLog;
  };

  const remove = async (visitLogId: number) => {
    const removedVisitLog = await clientSupabase
      .from('visitLog')
      .delete()
      .eq('id', visitLogId)
      .select();
    return removedVisitLog;
  };

  return { insert, update, remove };
};
