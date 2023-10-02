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

  const update = async (params: UpdateParams<'visitLog'>) => {
    const updatedVisitLog = await clientSupabase
      .from('visitLog')
      .update({
        ...params,
        userProfileId: user?.id ?? '',
      })
      .select();
    return updatedVisitLog;
  };

  return { insert, update };
};
