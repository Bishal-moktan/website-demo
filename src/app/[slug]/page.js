'use client';
import { data } from '@/data/data';
import styles from './page.module.css';
import { useEffect, useState } from 'react';

const SinglePage = ({ params }) => {
  const [item, setItem] = useState({});
  const slug = params.slug;
  useEffect(() => {
    const temp = data.filter((item) => item.slug === slug);
    setItem(temp[0]);
  }, [slug]);
  console.log(item);
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>{item.title}</h2>
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
  );
};
export default SinglePage;
