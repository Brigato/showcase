import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/Link';

const DynamicRoute = () => {
  const router = useRouter();
  const { dynamicRoute } = router.query;
  return (
    <div>
      <Head>
        <title>{dynamicRoute}</title>
      </Head>
      <h1>Dynamic Route: {dynamicRoute}</h1>
      <Link href='/'>Back to home</Link>
    </div>
  );
};

export default DynamicRoute;
