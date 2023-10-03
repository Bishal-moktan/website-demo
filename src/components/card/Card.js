import styles from './card.module.css';
import { IoOpenOutline } from 'react-icons/io5';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ icon, title, slug }) => {
  return (
    <section className={styles.container}>
      <h4 className={styles.header}>{title}</h4>
      <div className={styles.icon}>
        <Image src={icon} alt="icon" />
      </div>
      <Link href={`/${slug}`} className={styles.btn}>
        Learn More <IoOpenOutline />
      </Link>
    </section>
  );
};
export default Card;
