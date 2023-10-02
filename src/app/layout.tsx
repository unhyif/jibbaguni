import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { useServerSupabase } from '@hooks/useServerSupabase';
import UserProfileProvider from '@components/Layout/UserProfileProvider';
import { RecoilProvider } from '@components/Layout/RecoilProvider';
import '@styles/reset.css';
import { cookies } from 'next/headers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '집바구니',
};

export const RootLayout = async ({ children }: PropsWithChildren) => {
  const { supabase } = useServerSupabase(cookies());

  const {
    data: { session },
  } = await supabase.auth.getSession();
  const accessToken = session?.access_token ?? null;

  const getUserProfile = async () => {
    const { data } = await supabase
      .from('userProfile')
      .select('*')
      .eq('id', session?.user.id ?? '');
    const userProfile = data?.[0] ?? null;
    return userProfile;
  };
  const userProfile = session ? await getUserProfile() : null;

  return (
    <html lang="ko">
      <body className={inter.className}>
        <RecoilProvider>
          <UserProfileProvider
            accessToken={accessToken}
            userProfile={userProfile}
          >
            {children}
          </UserProfileProvider>
        </RecoilProvider>
      </body>
    </html>
  );
};

export default RootLayout;
