import React from 'react';
import Link from 'next/link';
import Footer from './Footer';
import styles from '../styles/contact.module.css';

const Contacts = (): any => {
  return (
    <div className={styles.container}> 
      <div className={styles.vl1} /> 
      <div className={styles.vl2}>
        <Link href="/">
          <span>
              01<br/>
              HOME
          </span>
        </Link>
      </div> 
      <div className={styles.vl3} />
      <div className={styles.vl4}>
        <Link href="/projects">
          <span>
          02<br/>PROJECTS
          </span>
        </Link>
      </div> 
      <div className={styles.vl5} /> 
      <div className={styles.vl6} >
        <Link href="/contact">
          <span>
          03<br/>CONTACT
          </span>
        </Link>
      </div>
      <Footer style={{zIndex:'-1'}}/>
    </div>   
  );
};

export default Contacts;