import Footer from '../Footer';
import Layout from '../Layout';

import styles from '../../styles/Chanel.module.css';

import Pic1 from '../../assets/images/chanel/pic1.png';
import Pic2 from '../../assets/images/chanel/pic2.png';
import Pic3 from '../../assets/images/chanel/pic3.png';
import Pic4 from '../../assets/images/chanel/pic4.png';

import Image from 'next/image';

const Chanel = (): any => {
  return (
    <Layout style={{height: '200vh' }}>
      <div className={styles.container}>
        <span className={styles.listTitle}>
          <span>CHANEL 5</span>
          <span className={styles.supTitle}>(04)</span>
        </span>
        <div>
          <div className={styles.img1Wrapper}>
            <Image
              className={styles.img1}
              src={Pic1}
              layout="responsive"
              alt=""
            />
          </div>

          <div className={styles.content}>
            <div className={styles.infoContainer}>
              <div className={styles.infoItem}>
                <span className={styles.infoItemTitle}>Service</span>
                <span className={styles.infoItemHint}>Web</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoItemTitle}>Area</span>
                <span className={styles.infoItemHint}>Storytelling</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoItemTitle}>Year</span>
                <span className={styles.infoItemHint}>2021</span>
              </div>
            </div>  
            <div className={styles.alignLeft}>
              <div className={styles.title}>
              Goal
              </div>
              <div className={styles.text}>
              A project that focused on working with typographers. The main task was to show the work with tex and fonts. The project tells the story of the creation and success of Chanel 5 perfume.  
              </div>
            </div>
            <div className={styles.img2Wrapper}>
              <Image
                className={styles.img1}
                src={Pic2}
                layout="responsive"
                alt=""
              />
            </div>
            <div className={styles.alignLeft}>
              <div className={styles.title}>
              Story
              </div>
              <div className={styles.text}>
              The story unfolds in sequence following significant dates in the brand`s history. For example, a new face of a brand or a reissue of a perfume.
              </div>
            </div>

            <div className={styles.img2Wrapper}>
              <Image
                className={styles.img1}
                src={Pic3}
                layout="responsive"
                alt=""
              />
            </div>

            <div className={styles.alignLeft}>
              <div className={styles.title}>
              Final outcome
              </div>
              <div className={styles.text}>
              When created, attention was paid to typography and composition. The site was created in white, black and gold colors, which is typical of the brand. Elegant typography and brand font are also used.              </div>
            </div>

            <div className={styles.img2Wrapper}>
              <Image
                className={styles.img1}
                src={Pic4}
                layout="responsive"
                alt=""
              />
            </div>
          </div>
          <Footer style={{zIndex:'20'}}/>
        </div>
      </div>
    </Layout>
  );
};

export default Chanel;