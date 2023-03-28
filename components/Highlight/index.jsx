import styles from 'ahmad/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Highlight = ({ data }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = '/data/data.json';

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      const category = data.filter((item) => item.utama);
      setResults(category);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <h1 className={styles.trend}>Berita Utama</h1>
        <div className={styles.wrap}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              {results.length > 0 && (
                <Link href={`detail/${results[0].id}`}>
                  <div className={styles.left}>
                    <Image className={styles.img_left} src={results[0].foto} width={558} height={300} />
                    <div className={styles.content_left}>
                      <p className={styles.tgl}>
                        <span className={styles.span}>{results[0].span}</span> | Mei 14, 2022
                      </p>
                      <h1 className={styles.head}>{results[0].title}</h1>
                      <p className={styles.last}>{results[0].time}</p>
                    </div>
                  </div>
                </Link>
              )}
            </>
          )}
          <div className={styles.right}>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <>
                {results.slice(1).map((item) => (
                  <Link href={`detail/${item.id}`}>
                    <div className={styles.card}>
                      <div className={styles.content}>
                        <h1 className={styles.content_head}>{item.title}</h1>
                        <p className={styles.desc}>
                          <span>{item.span}</span> {item.deskripsi.slice(0, 70)}...
                        </p>
                        <p className={styles.cor}>{item.time}</p>
                      </div>
                      <Image className={styles.img_right} src={item.foto} width={170} height={100} />
                    </div>
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
