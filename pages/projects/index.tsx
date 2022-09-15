import Footer from '../Footer';
import Layout from '../Layout';
import Image from 'next/image';
import YourGym from '../../assets/images/your_gym/project_main.png';
import Chanel from '../../assets/images/chanel/project_main.png';
import Photograh from '../../assets/images/photograph/project_main.png';
import Gudzyk from '../../assets/images/gudzyk/project_main.png';
import Link from 'next/link';

import { motion } from 'framer-motion';
import styles from '../../styles/Projects.module.css';

const Projects = ():any => {
  const cardVariants = {
    offscreen: {
      y: '200',
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      // transition: {
      //   type: 'spring',
      //   bounce: 4,
      //   duration: 8,
      // },
      transition: { ease: 'easeIn', duration: 1 },
    },
  };
  

  return (
    <Layout style={{height: '100%' }}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={cardVariants}
          >
            <span className={styles.listTitle}>PROJECTS</span>
          </motion.div>
          <div className={styles.listWrapper}>
            <div className={styles.listEl}>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }}
                variants={cardVariants}
              >
                <Link 
                  href="/projects/your-gym"
                >
                  <Image src={YourGym} layout="responsive"/>
                </Link>
              </motion.div>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }}
                variants={cardVariants}
              >
                <Link href="/projects/your-gym">
                  <div 
                    className={styles.listElTitle}
                  >
                    <div className={styles.listElText}>YOUR GYM
                      <span className={styles.supTitle}>(2022)</span>
                    </div>
                    <div className={styles.listElImage} />
                  </div>
                </Link>
              </motion.div>
            </div>
            <div 
              className={styles.listEl}
            >
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }}
                variants={cardVariants}
              >
                <Link href="/projects/photograph">
                  <Image src={Photograh} layout="responsive"/> 
                </Link>
              </motion.div>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }}
                variants={cardVariants}
              >
                <Link href="/projects/photograph">
                  <div className={styles.listElTitle}>
                    <div className={styles.listElText}>PHOTO
                      <span className={styles.supTitle}>(2021)</span>
                    </div>
                    <div className={styles.listElImage} />
                  </div>
                </Link>
              </motion.div>
            </div >
            <div className={styles.listEl}>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }}
                variants={cardVariants}
              >
                <Link href="/projects/gudzyk">
                  <Image src={Gudzyk} layout="responsive"/> 
                </Link>
              </motion.div>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }}
                variants={cardVariants}
              >
                <Link href="/projects/gudzyk">
                  <div className={styles.listElTitle}>
                    <div className={styles.listElText}>GUDZYK
                      <span className={styles.supTitle}>(2021)</span>
                    </div>
                    <div className={styles.listElImage} />
                  </div>
                </Link>
              </motion.div>
            </div>
            <div className={styles.listEl}>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }}
                variants={cardVariants}
              >
                <Link href="/projects/chanel">
                  <Image src={Chanel} layout="responsive"/> 
                </Link>
              </motion.div>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }}
                variants={cardVariants}
              >
                <Link href="/projects/chanel">
                  <div className={styles.listElTitle}>
                    <div className={styles.listElText}>CHANEL
                      <span className={styles.supTitle}>(2021)</span>
                    </div>
                    <div className={styles.listElImage} />
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        <Footer style={{zIndex:'20'}}/>/
      </div>
    </Layout>
  );
};

export default Projects;