import { details } from '@/data/details';
import styles from './page.module.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import Image from 'next/image';

const SinglePage = ({ params }) => {
  const data = details[params.slug];
  console.log(data);
  return (
    <div className={styles.container}>
      <h1>{data.title}</h1>
      <div className={styles.image}>
        <Image src={data.icon} alt={data.title} />
      </div>
      <div className="points">
        {data.points.map((item, index) => {
          return (
            <div key={index} className={styles.point}>
              <BsFillPatchCheckFill className={styles.icon} />
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SinglePage;
