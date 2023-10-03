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
        <h2>Lorem ipsum</h2>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  );
};
export default Intro;
