import Footer from '../Footer';
import Layout from '../Layout';
import Image from 'next/image';
import ArrowHorizontal from '../../assets/icons/arror-horizontal.svg';
import YourGym from '../../assets/images/your_gym/project_main.png';
import Chanel from '../../assets/images/chanel/project_main.png';
import Photograh from '../../assets/images/photograph/project_main.png';
import Gudzyk from '../../assets/images/gudzyk/project_main.png';

import styles from '../../styles/Projects.module.css';

const Projects = ():any => {
  return (
    <Layout style={{height: '3600px'  }}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.listTitle}>PROJECTS</span>
          <div className={styles.listWrapper}>
            <div className={styles.listEl}>
              <Image src={YourGym}/> 
              <div className={styles.listElTitle}>
                <span className={styles.listElText}>YOUR GYM</span>
                <Image src={ArrowHorizontal} className={styles.listElImage} />
              </div>
            </div>
            <div className={styles.listEl}>
              <Image src={Photograh}/> 
              <div className={styles.listElTitle}>
                <span className={styles.listElText}>PHOTO</span>
                <Image src={ArrowHorizontal} className={styles.listElImage} />
              </div>
            </div>
            <div className={styles.listEl}>
              <Image src={Gudzyk}/> 
              <div className={styles.listElTitle}>
                <span className={styles.listElText}>GUDZYK</span>
                <Image src={ArrowHorizontal} className={styles.listElImage} />
              </div>
            </div>
            <div className={styles.listEl}>
              <Image src={Chanel}/> 
              <div className={styles.listElTitle}>
                <span className={styles.listElText}>CHANEL</span>
                <Image src={ArrowHorizontal} className={styles.listElImage} />
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </Layout>
  );
};

export default Projects;