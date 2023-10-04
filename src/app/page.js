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
          return <Card item={item} key={index} />;
        })}
      </div>
    </main>
  );
}
