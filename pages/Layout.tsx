import React from 'react';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';

const Layout = ({ children, style }: { children: any, style: any }): any => {
  return (
    <div className={styles.container} style={style}> 
      {children}
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
        <Link href="/projects">
          <span>
          03<br/>CONTACT
          </span>
        </Link>
      </div>
    </div>   
  );
};

export default Layout;