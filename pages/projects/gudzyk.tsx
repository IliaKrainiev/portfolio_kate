import Footer from '../Footer';
import Layout from '../Layout';

import styles from '../../styles/Photograph.module.css';

import Pic1 from '../../assets/images/gudzyk/pic1.png';
import Pic2 from '../../assets/images/gudzyk/pic2.png';
import Pic3 from '../../assets/images/gudzyk/pic3.png';
import Pic4 from '../../assets/images/gudzyk/pic4.png';
import Pic5 from '../../assets/images/gudzyk/pic5.png';

import Image from 'next/image';

const Photograh = (): any => {
  return (
    <Layout style={{height: '3000px' }}>
      <div className={styles.container}>
        <span className={styles.listTitle}>
          <span>GUDZYK</span>
          <span className={styles.supTitle}>(03)</span>
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
                <span className={styles.infoItemHint}>E-commerce</span>
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
              E-commerce project for Gudzyk felt accessories store. In this project, the main thing was to convey the mood of the business and make it convenient and understandable for customers.              </div>
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
              The site contains sections about us, catalog, В2В direction and contacts. There are also more detailed categories to the catalog on the main page. There are also reviews from real customers in order to learn about the quality of the product. 
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
              A small boutique e-commerce site was created in a cute and homely style.
              </div>
            </div>

            <div className={styles.img2Wrapper}>
              <Image
                className={styles.img1}
                src={Pic4}
                layout="responsive"
                alt=""
              />
            </div>

            <div className={styles.img2Wrapper}>
              <Image
                className={styles.img1}
                src={Pic5}
                layout="responsive"
                alt=""
              />
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </Layout>
  );
};

export default Photograh;