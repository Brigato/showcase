import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/banner';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  const handleOnBannerClick = () => {
    console.log('Banner clicked');
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffe shops</title>
        <meta name='description' content='Coffee shops rating system' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>Coffee shops rating system</h1> */}
        <Banner buttonText='View stores nearby' handleOnClick={handleOnBannerClick} />
        <Image className={styles.heroImage} src='/static/hero-image.png' width={920} height={352} />
        <Link href='/coffee-store/1'>Coffee store 1</Link>
        <Link href='/courses/nextjs'>Go to courses page</Link>
      </main>
    </div>
  );
}
