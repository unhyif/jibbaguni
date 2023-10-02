import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { useServerSupabase } from '@hooks/useServerSupabase';
import styles from '@styles/reset.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '집바구니',
};

export const RootLayout = async ({ children }: PropsWithChildren) => {
  const { supabase } = useServerSupabase();
  const { data } = await supabase.auth.getSession();
  // console.log(Date.now(), data.session);
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
