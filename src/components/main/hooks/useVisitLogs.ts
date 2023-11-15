import { useState } from 'react';
import { VisitLog } from '~/types/VisitLog';

interface UseVisitLogsProps {}

export const useVisitLogs = (initialVisitLogs: VisitLog[]) => {
  const [visitLogs, setVisitLogs] = useState<VisitLog[]>(initialVisitLogs);

  return { visitLogs, handleVisitLogs: setVisitLogs };
};
