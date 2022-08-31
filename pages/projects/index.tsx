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
    <Layout style={{height: '3600px'  }}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.listTitle}>PROJECTS</span>
          <div className={styles.listWrapper}>
            <div className={styles.listEl}>
              <Link href="/projects/your-gym">
                <Image src={YourGym}/>
              </Link>
              <Link href="/projects/your-gym">
                <div className={styles.listElTitle}>
                  <span className={styles.listElText}>YOUR GYM</span>
                  <Image src={ArrowHorizontal} className={styles.listElImage} />
                </div>
              </Link>
            </div>
            <div className={styles.listEl}>
              <Link href="/projects/photograph">
                <Image src={Photograh}/> 
              </Link>
              <Link href="/projects/photograph">
                <div className={styles.listElTitle}>
                  <span className={styles.listElText}>PHOTO</span>
                  <Image src={ArrowHorizontal} className={styles.listElImage} />
                </div>
              </Link>
            </div>
            <div className={styles.listEl}>
              <Link href="/projects/gudzyk">
                <Image src={Gudzyk}/> 
              </Link>
              <Link href="/projects/gudzyk">
                <div className={styles.listElTitle}>
                  <span className={styles.listElText}>GUDZYK</span>
                  <Image src={ArrowHorizontal} className={styles.listElImage} />
                </div>
              </Link>
            </div>
            <div className={styles.listEl}>
              <Link href="/projects/chanel">
                <Image src={Chanel}/> 
              </Link>
              <Link href="/projects/chanel">
                <div className={styles.listElTitle}>
                  <span className={styles.listElText}>CHANEL</span>
                  <Image src={ArrowHorizontal} className={styles.listElImage} />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </Layout>
  );
};

export default Projects;