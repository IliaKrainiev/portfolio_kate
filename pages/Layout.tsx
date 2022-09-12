import React from 'react';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';

const Layout = ({ children, style }: { children: any, style?: any }): any => {
  return (
    <div className={styles.container} style={style}> 
      {children}
      <div className={styles.vl1} /> 
      <Link href="/">
        <span className={styles.linkText1}>
              01<br/>
              HOME
        </span>
      </Link>
      <div className={styles.vl2}/>
      <div className={styles.vl3} />
      <Link href="/projects">
        <span className={styles.linkText2}>
          02<br/>PROJECTS
        </span>
      </Link>
      <div className={styles.vl4} />
      <div className={styles.vl5} /> 
      <Link href="/contact">
        <span className={styles.linkText3}>
          03<br/>CONTACT
        </span>
      </Link>
      <div className={styles.vl6} />
      <div className={styles.vl7} /> 
    </div>   
  );
};

export default Layout;