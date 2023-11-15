export const Pathnames = {
  main: '/',
  visitLog: (visitLogId: number) => `/visit-log/${visitLogId}`,
  visitLogCreate: '/visit-log/create',
  visitLogCompare: '/visit-log/compare',
} as const;
