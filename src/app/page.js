import Image from 'next/image';
import styles from './page.module.css';
import Intro from '@/components/intro/Intro';
import Card from '@/components/card/Card';
import { data } from '@/data/data';

export default function Home() {
  return (
    <main>
      <Intro />
      <div className={styles.services}>
        {data.map((item, index) => {
          return (
            <Card
              title={item.title}
              icon={item.icon}
              slug={item.slug}
              key={index}
            />
          );
        })}
      </div>
    </main>
  );
}
