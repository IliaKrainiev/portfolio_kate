import type { NextPage } from 'next';

import Layout from './Layout';
import MainPage from './MainPage';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.body}>
      <Layout style={{height: '200vh' }}>
        <MainPage />
      </Layout>
    </div>
  );
};

export default Home;
