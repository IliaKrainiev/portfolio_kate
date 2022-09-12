import Footer from '../Footer';
import Layout from '../Layout';
import Image from 'next/image';
import ArrowHorizontal from '../../assets/icons/arror-horizontal.svg';
import YourGym from '../../assets/images/your_gym/project_main.png';
import Chanel from '../../assets/images/chanel/project_main.png';
import Photograh from '../../assets/images/photograph/project_main.png';
import Gudzyk from '../../assets/images/gudzyk/project_main.png';
import Link from 'next/link';

import styles from '../../styles/Projects.module.css';

const Projects = ():any => {
  return (
    <Layout style={{height: '100%' }}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.listTitle}>PROJECTS</span>
          <div className={styles.listWrapper}>
            <div className={styles.listEl}>
              <Link href="/projects/your-gym">
                <Image src={YourGym} layout="responsive"/>
              </Link>
              <Link href="/projects/your-gym">
                <div className={styles.listElTitle}>
                  <span className={styles.listElText}>YOUR GYM</span>
                  <span className={styles.supTitle}>(2022)</span>
                  <Image src={ArrowHorizontal} className={styles.listElImage} />
                </div>
              </Link>
            </div>
            <div className={styles.listEl}>
              <Link href="/projects/photograph">
                <Image src={Photograh} layout="responsive"/> 
              </Link>
              <Link href="/projects/photograph">
                <div className={styles.listElTitle}>
                  <span className={styles.listElText}>PHOTO</span>
                  <span className={styles.supTitle}>(2021)</span>
                  <Image src={ArrowHorizontal} className={styles.listElImage} />
                </div>
              </Link>
            </div>
            <div className={styles.listEl}>
              <Link href="/projects/gudzyk">
                <Image src={Gudzyk} layout="responsive"/> 
              </Link>
              <Link href="/projects/gudzyk">
                <div className={styles.listElTitle}>
                  <span className={styles.listElText}>GUDZYK</span>
                  <span className={styles.supTitle}>(2021)</span>
                  <Image src={ArrowHorizontal} className={styles.listElImage} />
                </div>
              </Link>
            </div>
            <div className={styles.listEl}>
              <Link href="/projects/chanel">
                <Image src={Chanel} layout="responsive"/> 
              </Link>
              <Link href="/projects/chanel">
                <div className={styles.listElTitle}>
                  <span className={styles.listElText}>CHANEL</span>
                  <span className={styles.supTitle}>(2021)</span>
                  <Image src={ArrowHorizontal} className={styles.listElImage} />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Footer style={{zIndex:'20'}}/>/
      </div>
    </Layout>
  );
};

export default Projects;