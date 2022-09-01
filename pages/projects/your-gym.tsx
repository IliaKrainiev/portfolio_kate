import Footer from '../Footer';
import Layout from '../Layout';
import Image from 'next/image';

import Pic1 from '../../assets/images/your_gym/pic1.png';
import Pic2 from '../../assets/images/your_gym/pic2.png';
import Pic3 from '../../assets/images/your_gym/pic3.png';
import Pic4 from '../../assets/images/your_gym/pic4.png';
import Pic5 from '../../assets/images/your_gym/pic5.png';
import Pic6 from '../../assets/images/your_gym/pic6.png';
import Pic7 from '../../assets/images/your_gym/pic7.png';
import Pic8 from '../../assets/images/your_gym/pic8.png';
import Pic9 from '../../assets/images/your_gym/pic9.png';
import Pic11 from '../../assets/images/your_gym/pic11.png';
import Pic12 from '../../assets/images/your_gym/pic12.png';
import Pic13 from '../../assets/images/your_gym/pic13.png';

import styles from '../../styles/YourGym.module.css';

const YourGym = (): any => {
  return (
    <Layout style={{height: '9353px' }}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.listTitle}>
            <span>YOUR GYM</span>
            <span className={styles.supTitle}>(01)</span>
          </span>
          <div className={styles.img1Wrapper}>
            <Image
              className={styles.img1}
              src={Pic1}
              layout="responsive"
              alt=""
            />
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.infoItem}>
              <span className={styles.infoItemTitle}>Service</span>
              <span className={styles.infoItemHint}>Mobile App</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoItemTitle}>Area</span>
              <span className={styles.infoItemHint}>Sport</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoItemTitle}>Year</span>
              <span className={styles.infoItemHint}>2022</span>
            </div>
          </div>
          <div className={styles.UxDevelopmentContainer}>
            <div className={styles.UxDevelopment}>
              <div className={styles.title}>
              Problem
              </div>
              <div className={styles.text}>
              The problem was that there are many different gyms and studios that combine different workouts. That is, in order to go to one training session, you need to sign up for a season ticket, fill out a questionnaire, etc. If you don`t like the studio, you will have to do it again and again. In addition, it is necessary to check the websites of dozens of studios for the availability of a particular sport. I`s all a lot of steps and takes time.
              </div>
              <div className={styles.title}>
              Goal
              </div>
              <div className={styles.text}>
            It was decided to create an application that would connect all the studios and halls of the city and give the opportunity to buy a single subscription that would work in all institutions. Also, create sections that would allow you to filter all the gyms and workouts by various parameters and find exactly what you need. 
              </div>
              <div className={styles.img2Wrapper}>
                <Image 
                  className={styles.img2}
                  src={Pic2} 
                />
              </div>

              <div className={styles.title}>
              Personas
              </div>
              <div className={styles.text}>
            From the beginning, two personas were created with different backgrounds and goals. The needs, goals and fears of people were determined, the market was analyzed and competitors and alternatives were found. 
              </div>
              <div className={styles.img3Wrapper}>
                <Image
                  className={styles.img3}
                  src={Pic3}
                />
              </div>
              <div className={styles.img4Wrapper}>
                <Image 
                  className={styles.img4}
                  src={Pic4}
                />
              </div>
              <div className={styles.text}>But during the research it became clear that the flow they would use was the same. Therefore, attention was focused on one person.
              </div>
              <div className={styles.title}>Site map</div>
              <div className={styles.text}>All the pains and wishes of the persons were analyzed and a site map was compiled. In the end, we got four sections, two of which are related to search and filtering.
              </div>
              <div className={styles.img5Wrapper}>
                <Image 
                  className={styles.img5}
                  src={Pic5}
                />
              </div>
            </div>
            <div className={styles.img6Wrapper}>
              <Image 
                className={styles.img6}
                src={Pic6}
                layout="responsive"
              />
            </div>
            <div className={styles.alignLeft}>
              <div className={styles.title}>
            Wireframes
              </div>
              <div className={styles.text}>
            All the pains and wishes of the persons were analyzed and a site map was compiled. In the end, we got four sections, two of which are related to search and filtering.
              </div>
            </div>

            <div className={styles.img7Wrapper}>
              <Image
                className={styles.img7}
                src={Pic7}
                layout="responsive"
              />
            </div> 

            <div className={styles.alignLeft}>
              <div className={styles.title}>
              Onboarding
              </div>
              <div className={styles.text}>
              A solution that emerged during the design process is onboarding. It allows us to customize the content for the user when searching for a workout and when tracking his activity.              </div>
            </div>
            <div className={styles.img7Wrapper}>
              <Image
                className={styles.img7}
                src={Pic8}
                layout="responsive"
              />
            </div> 
            <div className={styles.alignLeft}>
              <div className={styles.title}>
                Final outcome
              </div>
              <div className={styles.text}>
                As a result, we got an application that allows you to find what you need 100%. Allows you to use one single subscription while visiting different studios. Allows you to set goals and monitor their implementation and overall activity.      
              </div>
            </div> 
            <div className={styles.img7Wrapper}>
              <Image
                className={styles.img7}
                src={Pic9}
                layout="responsive"
              />
            </div>
            <div className={styles.imgSection1Wrapper}>
              <div className={styles.img12Wrapper}>
                <Image
                  className={styles.img12}
                  src={Pic12}
                  // height={608}
                  layout="responsive"
                />
              </div> 
              <div className={styles.img11Wrapper}> 
                <Image
                  className={styles.img11}
                  src={Pic11}
                  height={608}
                  layout="responsive"
                />
              </div> 
            </div>
            <div className={styles.img7Wrapper}>
              <Image
                className={styles.img7}
                src={Pic13}
                layout="responsive"
              />
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </Layout>
  );
};

export default YourGym;