import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
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
