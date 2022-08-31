import React from 'react';
import Link from '../components/Link';
import styles from '../styles/Footer.module.css';

const LINKEDIN_TEXT = 'LINKEDIN';
const TELEGRAM_TEXT = 'TELEGRAM';
const DRIBBLE_TEXT = 'DRIBBLE';

const LINKEDIN_LINK = 'https://www.linkedin.com/in/pohodaieva/';
const TELEGRAM_LINK = 'TELEGRAM';
const DRIBBLE_LINK = 'DRIBBLE';

const Footer = (): any => {
  return (
    <div className={styles.container}>
      <div className={styles.footerTitle}>
        <div className={styles.footerTitle1Line}><span>(Let`s talk)</span></div>
        <div className={styles.footerTitle2Line}>
          <a href="#"><span>POHODAIEVA.<br/>KATERYNA@GMAIL.COM</span></a>
          <div className={styles.arrowImage} />
        </div>
      </div>
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
    </div>
  );
};

export default Footer;