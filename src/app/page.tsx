import { getServerSupabase } from '@utils/supabase';
import { cookies } from 'next/headers';
import Main from '@components/main';
import { VisitLog } from '~/types/visitLog';

const Home = async () => {
  const supabase = getServerSupabase(cookies());

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const getVisitLogs = async () => {
    const { data: visitLogs } = await supabase
      .from('visitLog')
      .select('*')
      .order('createdAt', { ascending: false });
    return visitLogs as VisitLog[];
  };
  const visitLogs = session ? await getVisitLogs() : [];

  return <Main initialVisitLogs={visitLogs} />;
};

export default Home;
