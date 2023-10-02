import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { useServerSupabase } from '@hooks/useServerSupabase';
import UserProfileProvider from '@components/Layout/UserProfileProvider';
import { RecoilProvider } from '@components/Layout/RecoilProvider';
import '@styles/reset.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '집바구니',
};

export const RootLayout = async ({ children }: PropsWithChildren) => {
  const { supabase } = useServerSupabase();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="ko">
      <body className={inter.className}>
        <RecoilProvider>
          <UserProfileProvider session={session}>
            {children}
          </UserProfileProvider>
        </RecoilProvider>
      </body>
    </html>
  );
};

export default RootLayout;
