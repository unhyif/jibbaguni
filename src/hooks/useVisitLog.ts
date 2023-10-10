import { clientSupabase, getTimestamp } from '@utils/supabase';
import { useRecoilValue } from 'recoil';
import { userProfileAtom } from '@recoil/states';
import { InsertParams, UpdateParams } from '~/types/database/utils';

interface UseVisitLogProps {}

export const useVisitLog = () => {
  const user = useRecoilValue(userProfileAtom);

  const create = async (
    params: Omit<InsertParams<'visitLog'>, 'userProfileId'>,
  ) => {
    const createdVisitLog = await clientSupabase
      .from('visitLog')
      .insert({
        ...params,
        userProfileId: user?.id ?? '',
      })
      .select()
      .single();
    return createdVisitLog;
  };

  const edit = async (visitLogId: number, params: UpdateParams<'visitLog'>) => {
    const editedVisitLog = await clientSupabase
      .from('visitLog')
      .update({ ...params, updatedAt: getTimestamp() })
      .eq('id', visitLogId)
      .select()
      .single();
    return editedVisitLog;
  };

  const remove = async (visitLogId: number) => {
    const removedVisitLog = await clientSupabase
      .from('visitLog')
      .delete()
      .eq('id', visitLogId)
      .select();
    return removedVisitLog;
  };

  return { create, edit, remove };
};
