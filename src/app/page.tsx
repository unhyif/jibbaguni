import { getSessionInServer } from '@utils/supabase';
import { cookies } from 'next/headers';
import Main from '@components/main';
import { getMyVisitLogsAPI } from '@apis/visit-logs';

const Home = async () => {
  const session = getSessionInServer(cookies());

  const visitLogs = session ? await getMyVisitLogsAPI() : [];

  return <Main initialVisitLogs={visitLogs} />;
};

export default Home;
