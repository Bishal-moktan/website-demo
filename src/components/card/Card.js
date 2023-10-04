import styles from './card.module.css';
import { IoOpenOutline } from 'react-icons/io5';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ item }) => {
  return (
    <Link href={`/${item.slug}`}>
      <section className={styles.container}>
        <h2 className={styles.header} style={{ backgroundColor: item.bg }}>
          {item.title}
        </h2>
        <div className={styles.items}>
          {item?.items?.map((subitem, index) => {
            return (
              <div className={styles.item} key={index}>
                <h3>{subitem.subtitle}</h3>
                <ul className={styles.points}>
                  {subitem?.points?.map((point, index) => {
                    return <li key={index}>{point}</li>;
                  })}
                  {subitem?.terms?.map((term, index) => {
                    return (
                      <ul className={styles.term} key={index}>
                        <li>
                          <span>{term.subtitle}</span>
                          {term.desc}
                        </li>
                      </ul>
                    );
                  })}
                </ul>
              </div>
            );
          })}

          <div className={styles.terms}>
            {item?.terms?.map((term, index) => {
              return (
                <ul className={styles.term} key={index}>
                  <li>
                    <span className={styles.bold}>{term.subtitle}</span>
                    <span className={styles.desc}> {term.desc}</span>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </section>
    </Link>
  );
};
export default Card;
