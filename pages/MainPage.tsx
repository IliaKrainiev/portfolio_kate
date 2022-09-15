import styles from '../styles/MainPage.module.css';
import MainImage from '../assets/images/main.png';
import Image from 'next/image';

import { slideInUp } from 'react-animations';
// @ts-ignore
import Radium, {StyleRoot} from 'radium';

import Link from 'next/link';
import Footer from './Footer';

const animation = {
  slideInUp: {
    animation: 'x 0.9s',
    animationName: Radium.keyframes(slideInUp, 'slideInUp'),
  },
};
 

const MainPageTitle = (): any => {
  return (
    <StyleRoot>
      <div className={styles.container}>
        <div 
          className={styles.locationWrapper}
          // @ts-ignore
          style={animation.slideInUp}
        >
          <div className={styles.icon}/><span>Kyiv, Ukraine</span>
        </div>
        <div 
          className={styles.textWrapper}
          // @ts-ignore
          style={animation.slideInUp}
        >
          <span>HEY! I&#39;M KATERYNA, UI/UX DESIGNER, WHO FOND OF CREATING FASHION WEBSITES AND CONVENIENT APPS/</span>
        </div>
        <div 
          className={styles.imageWrapper}
          // @ts-ignore
          style={animation.slideInUp}
        >
          <Image 
            src={MainImage}
            layout="responsive"
            height={753}
            alt="general image"
            priority
          />
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.contentTitle}>PROJECTS</div>
          <div className={styles.listWrapper}>
            <Link href="/projects/your-gym">

              <div className={styles.listEl}>
                <div className={styles.smallImage} />
                <span className={styles.listElText}>YOUR GYM</span>
                <div className={styles.listElImage} />
              </div>
            </Link>
            <Link href="/projects/photograph">

              <div className={styles.listEl}>
                <div className={styles.smallImage} />
                <span className={styles.listElText}>PHOTO</span>
                <div className={styles.listElImage} />
              </div>
            </Link>
            <Link href="/projects/gudzyk">

              <div className={styles.listEl}>
                <div className={styles.smallImage} />
                <span className={styles.listElText}>GUDZYK</span>
                <div className={styles.listElImage} />
              </div>
            </Link>
            <Link href="/projects/chanel">
              <div className={styles.listEl}>
                <div className={styles.smallImage} />
                <span className={styles.listElText}>CHANEL 5</span>
                <div className={styles.listElImage} />
              </div>
            </Link>

          </div>
        </div>
        <Footer />
      </div>
    </StyleRoot>

  );
};

export default MainPageTitle;