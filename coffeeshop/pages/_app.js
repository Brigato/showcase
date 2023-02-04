import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Coffe shops</title>
        <meta name='description' content='Coffee shops rating system' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />;
      <footer>
        Icons by{' '}
        <a href='https://icons8.com/' target='_blank'>
          Icons8
        </a>
      </footer>
    </>
  );
}

export default MyApp;
