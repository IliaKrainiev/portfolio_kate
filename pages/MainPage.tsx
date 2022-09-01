import styles from '../styles/MainPage.module.css';
import MainImage from '../assets/images/main.png';
import ArrowHorizontal from '../assets/icons/arror-horizontal.svg';
import Image from 'next/image';
import Link from 'next/link';
import Footer from './Footer';

const MainPageTitle = (): any => {
  return (
    <div className={styles.container}>
      <div className={styles.locationWrapper}>
        <div className={styles.icon}/><span>Kyiv, Ukraine</span>
      </div>
      <div className={styles.textWrapper}>
        <span>HEY! I`M KATERYNA, UI/UX DESIGNER, WHO FOND OF CREATING FASHION WEBSITES AND CONVENIENT APPS</span>
      </div>
      <div className={styles.imageWrapper}>
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
              <span className={styles.listElText}>YOUR GYM</span>
              <Image src={ArrowHorizontal} className={styles.listElImage} />
            </div>
          </Link>
          <Link href="/projects/photograph">

            <div className={styles.listEl}>
              <span className={styles.listElText}>PHOTO</span>
              <Image src={ArrowHorizontal} className={styles.listElImage} />
            </div>
          </Link>
          <Link href="/projects/gudzyk">

            <div className={styles.listEl}>
              <span className={styles.listElText}>GUDZYK</span>
              <Image src={ArrowHorizontal} className={styles.listElImage} />
            </div>
          </Link>
          <Link href="/projects/chanel">
            <div className={styles.listEl}>
              <span className={styles.listElText}>CHANEL 5</span>
              <Image src={ArrowHorizontal} className={styles.listElImage} />
            </div>
          </Link>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPageTitle;