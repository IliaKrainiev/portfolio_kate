import React from 'react';
import Link from '../components/Link';
import styles from '../styles/Footer.module.css';
import { motion } from 'framer-motion';

const LINKEDIN_TEXT = 'LINKEDIN';
const TELEGRAM_TEXT = 'TELEGRAM';
const DRIBBLE_TEXT = 'DRIBBLE';

const LINKEDIN_LINK = 'https://www.linkedin.com/in/pohodaieva/';
const TELEGRAM_LINK = 'TELEGRAM';
const DRIBBLE_LINK = 'DRIBBLE';

const Footer = ({ style }: any): any => {  
  const cardVariants = {
    visible: {
      y: '200',
      opacity: 1,
      transition: { ease: 'easeIn', duration: 1 },
    },
    hidden: {
      y: 0,
      opacity: 0,
      // transition: {
      //   type: 'spring',
      //   bounce: 4,
      //   duration: 8,
      // },
    },
  };
  return (
    <div className={styles.container} style={style}>
      <div className={styles.content}>
        <div className={styles.footerTitle}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={cardVariants}
          >
            <div className={styles.footerTitle1Line}><span>(Let`s talk)</span></div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={cardVariants}
          >
            <div className={styles.footerTitle2Line}>
              <a href="#"><span>POHODAIEVA.<br/>KATERYNA@GMAIL.COM</span></a>
              <div className={styles.arrowImage} />
            </div>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={cardVariants}
        >
          <div className={styles.buttonGroup}> 
            <Link 
              buttonText={LINKEDIN_TEXT}
              buttonLink={LINKEDIN_LINK}
            />
            <Link 
              buttonText={TELEGRAM_TEXT}
              buttonLink={TELEGRAM_LINK}
            />
            <Link 
              buttonText={DRIBBLE_TEXT}
              buttonLink={DRIBBLE_LINK}
            />
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default Footer;