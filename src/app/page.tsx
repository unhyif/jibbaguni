import { getSessionInServer } from '@utils/supabase';
import { cookies } from 'next/headers';
import Main from '@components/main';
import { getMyVisitLogsAPI } from '@apis/visit-log';
import { MOCK_VISIT_LOGS } from '@constants/mockData';

const Home = async () => {
  const session = await getSessionInServer(cookies());

  const visitLogs = session ? await getMyVisitLogsAPI() : [];

  return <Main initialVisitLogs={MOCK_VISIT_LOGS} />;
};

export default Home;
