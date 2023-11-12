import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import UserProvider from '@components/layout/UserProvider';
import { RecoilProvider } from '@components/layout/RecoilProvider';
import '@styles/global.css';
import { getSessionInServer } from '@utils/supabase';
import { cookies } from 'next/headers';
import localFont from 'next/font/local';
import StyledComponentsRegistry from '@components/layout/StyledComponentsRegistry';
import { getUserAPI } from '~/apis/auth';

const defaultFont = localFont({
  src: '../styles/fonts/PretendardVariable.woff2',
});

export const metadata: Metadata = {
  title: '집바구니',
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const session = await getSessionInServer(cookies());
  const accessToken = session?.access_token ?? null;

  const user = session ? await getUserAPI() : null;

  return (
    <html lang="ko">
      <body className={defaultFont.className}>
        <StyledComponentsRegistry>
          <RecoilProvider>
            <UserProvider user={user} accessToken={accessToken}>
              {children}
            </UserProvider>
          </RecoilProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
