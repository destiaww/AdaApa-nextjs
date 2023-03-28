import styles from 'ahmad/styles/feed.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Feed = ({ data, title, link }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setResults(data);
    setIsLoading(false);
  }, [data]);

  return (
    <section className={styles.feed}>
      <div className={styles.container}>
        <h1 className={styles.head_feed}>{title}</h1>
        <div className={styles.card}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              {results.map((item, index) => (
                <div className={styles.card_content} key={index}>
                  <Link href={`${link}/${item.id}`}>
                    <Image className={styles.img} src={item.foto} width={267} height={150} />
                  </Link>
                  <h1 className={styles.head}>{item.title}</h1>
                  <p className={styles.paragraph}>
                    <span className={styles.span}>{item.span}</span> {item.deskripsi.slice(0, 50)} ...
                  </p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Feed;
