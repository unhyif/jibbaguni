import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import UserProfileProvider from '@components/layout/UserProfileProvider';
import { RecoilProvider } from '@components/layout/RecoilProvider';
import '@styles/global.css';
import { getServerSupabase } from '@utils/supabase';
import { cookies } from 'next/headers';
import localFont from 'next/font/local';
import StyledComponentsRegistry from '@components/layout/StyledComponentsRegistry';

const defaultFont = localFont({
  src: '../styles/fonts/PretendardVariable.woff2',
});

export const metadata: Metadata = {
  title: '집바구니',
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const supabase = getServerSupabase(cookies());

  const {
    data: { session },
  } = await supabase.auth.getSession();
  const accessToken = session?.access_token ?? null;

  const getUserProfile = async () => {
    const { data: userProfile } = await supabase
      .from('userProfile')
      .select('*')
      .maybeSingle();
    return userProfile;
  };
  const userProfile = session ? await getUserProfile() : null;

  return (
    <html lang="ko">
      <body className={defaultFont.className}>
        <StyledComponentsRegistry>
          <RecoilProvider>
            <UserProfileProvider
              accessToken={accessToken}
              userProfile={userProfile}
            >
              {children}
            </UserProfileProvider>
          </RecoilProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
