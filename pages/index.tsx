import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head children={''}>
        <title>Spotify Nextjs</title>
      </Head>
      <div>Home Page</div>
    </div>
  );
};

export default Home;
