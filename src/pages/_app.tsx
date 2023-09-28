import type { AppProps } from 'next/app';
import Head from 'next/head';
import styles from '@styles/reset.css';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>집바구니</title>
      <link rel="icon" href="/icons/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
