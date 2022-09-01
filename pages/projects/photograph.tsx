import Footer from '../Footer';
import Layout from '../Layout';

import styles from '../../styles/Photograph.module.css';

import Pic1 from '../../assets/images/photograph/pic1.png';
import Pic2 from '../../assets/images/photograph/pic2.png';
import Pic3 from '../../assets/images/photograph/pic3.png';
import Pic4 from '../../assets/images/photograph/pic4.png';
import Pic5 from '../../assets/images/photograph/pic5.png';
import Pic6 from '../../assets/images/photograph/pic6.png';

import Image from 'next/image';

const Photograh = (): any => {
  return (
    <Layout style={{height: '3000px' }}>
      <div className={styles.container}>
        <span className={styles.listTitle}>
          <span>PHOTOGRAPH</span>
          <span className={styles.supTitle}>(02)</span>
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
                <span className={styles.infoItemHint}>Web, Mobile</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoItemTitle}>Area</span>
                <span className={styles.infoItemHint}>Fashion</span>
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
              The theme of the work was the site for the photographer Anastasia Potapova. It had to be concise, minimalistic and simple. In this work, the main focus was on mesh and composition.
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
              Site map
              </div>
              <div className={styles.text}>
              On the site there are such categories as stils, diary and contact. This allows the photographer to show both his work and amateur shootings. They also allow you to find out details and contact the author.              </div>
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
              As a result, a desktop and mobile version of the site with an interesting chaotic composition was created.
              </div>
            </div>
            <div className={styles.img3Wrapper}>
              <div className={styles.img4}>
                <Image
                  src={Pic4}
                  width={320}
                />
              </div>
              <div className={styles.img4}>
                <div className={styles.img6}>
                  <Image
                    src={Pic6}
                    width={320}
                  /> 
                </div>
                <div className={styles.img5}>
                  <Image
                    src={Pic5}
                    width={320}
                  />
                </div>

              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </Layout>
  );
};

export default Photograh;