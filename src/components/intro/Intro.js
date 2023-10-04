import styles from './intro.module.css';
import personImg from '../../../public/person.jpg';
import Image from 'next/image';

const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={personImg} alt="Person" />
        <div className={styles.circle}></div>
        <div className={styles.smallCircle}></div>
      </div>
      <div className={styles.information}>
        <div>
          <h2>lorem ipsum</h2>
          <p>Loreipsum@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
export default Intro;
