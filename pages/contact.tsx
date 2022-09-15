import React from 'react';
import Link from 'next/link';
import LinkButton from '../components/Link';
import styles from '../styles/contact.module.css';
import { motion } from 'framer-motion';

const LINKEDIN_TEXT = 'LINKEDIN';
const TELEGRAM_TEXT = 'TELEGRAM';
const DRIBBLE_TEXT = 'DRIBBLE';

const LINKEDIN_LINK = 'https://www.linkedin.com/in/pohodaieva/';
const TELEGRAM_LINK = 'https://t.me/god1sdead';
const DRIBBLE_LINK = 'https://dribbble.com/PohodaievaKateryna';

const Contacts = (): any => {
  const pageVariants = {
    hidden: {
      backgroundColor: '#E4E3E3',
      borderRadius: '10000',
      width:0,
      height: 0,
      marginLeft: '50%',
      marginTop: '25%',
    
    },
    visible: {
      marginTop: '0%',
      marginLeft: '0%',
      width: '100%',
      borderRadius:0,
      backgroundColor: '#000000',
      paddingTop: '50vh',
      height: '100vh',
      // transition: {
      //   type: 'spring',
      //   bounce: 4,
      //   duration: 8,
      // },
    },
  };

  // const cardVariants = {
  //   visible: {
  //     y: '200',
  //     opacity: 1,
  //     transition: { ease: 'easeIn', duration: 1 },
  //   },
  //   hidden: {
  //     y: 0,
  //     opacity: 0,
  //     // transition: {
  //     //   type: 'spring',
  //     //   bounce: 4,
  //     //   duration: 8,
  //     // },
  //   },
  // };

  const opacityVariants = {
    visible: {
      opacity: 1,
      transition: { ease: 'easeIn', duration: 1.2 },
    },
    hidden: {
      opacity: 0,
      // transition: {
      //   type: 'spring',
      //   bounce: 4,
      //   duration: 8,
      // },
    },
  };
  return (

    <div className={styles.container}> 
      <div className={styles.vl1} /> 
      <div className={styles.vl2}>
        <Link href="/">
          <span className={styles.textLink}>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={opacityVariants}
              className={styles.content}
            > 
              01<br/>
              HOME
            </motion.span>
          </span>
        </Link>
      </div> 
      <div className={styles.vl3} />
      <div className={styles.vl4}>
        <Link href="/projects">
          <span className={styles.textLink}>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={opacityVariants}
              className={styles.content}
            > 
          02<br/>PROJECTS
            </motion.span>
          </span>
        </Link>
      </div> 
      <div className={styles.vl5} /> 
      <div className={styles.vl6} >
        <Link href="/contact">
          <span className={styles.textLink}>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={opacityVariants}
              className={styles.content}
            > 
          03<br/>CONTACT
            </motion.span>
          </span>
        </Link>
      </div>
      <div className={styles.footerContainer} style={{zIndex: '-1'}}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={pageVariants}
          transition={{duration: 0.6}}
          className={styles.content}
        > 
          <div className={styles.footerTitle}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={opacityVariants}
            >
              <div className={styles.footerTitle1Line}><span>(Let`s talk)</span></div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={opacityVariants}
            >
              <div className={styles.footerTitle2Line}>
                <a href="mailto: pohodaieva.kateryna@gmail.com "><span>POHODAIEVA.<br/>KATERYNA@GMAIL.COM</span></a>
                <a className={styles.arrowImage} href="mailto: pohodaieva.kateryna@gmail.com "/>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={opacityVariants}
          >
            <div className={styles.buttonGroup}> 
              <LinkButton 
                buttonText={LINKEDIN_TEXT}
                buttonLink={LINKEDIN_LINK}
              />
              <LinkButton 
                buttonText={TELEGRAM_TEXT}
                buttonLink={TELEGRAM_LINK}
              />
              <LinkButton 
                buttonText={DRIBBLE_TEXT}
                buttonLink={DRIBBLE_LINK}
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div> 
  );
};

export default Contacts;