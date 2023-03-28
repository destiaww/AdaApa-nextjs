import { RootLayout } from 'ahmad/components';
import styles from 'ahmad/styles/search.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Loading from '../loading';

const Search = () => {
  const router = useRouter();
  const { id } = router.query;
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');

  const url = '/data/data.json';

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setResults(data);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  const filteredResults = results.filter((result) => result.title.toLowerCase().includes(id.toLowerCase()) && (selectedCategory === '' || result.category === selectedCategory));

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <RootLayout title="AdaApaSearch">
      <section className={styles.search}>
        <div className={styles.container}>
          <p>
            {' '}
            Hasil pencarian <span>"{id}"</span> , {filteredResults.length} hasil ditemukan
          </p>

          <select className={styles.select} onChange={handleCategoryChange}>
            <option value="" className={styles.option}>
              All
            </option>
            <option value="sport" className={styles.option}>
              Sport
            </option>
            <option value="Entertainment" className={styles.option}>
              Entertainment
            </option>
            <option value="Business" className={styles.option}>
              Business
            </option>
            <option value="politik" className={styles.option}>
              Politik
            </option>
            <option value="technology" className={styles.option}>
              Teknologi
            </option>
            <option value="Lifestyle" className={styles.option}>
              Lifestyle
            </option>
          </select>
          {isLoading ? (
            <Loading />
          ) : (
            <div className={styles.wrap}>
              {filteredResults.map((item, index) => (
                <Link href={`/detail/${item.id}`}>
                  <div className={styles.card} key={index}>
                    <Image className={styles.img} src={item.foto} width={200} height={150} />
                    <div className={styles.content}>
                      <p className={styles.date}>Jumat, 24 Mar 2023 09:05 WIB</p>
                      <h1 className={styles.head}>{item.title}</h1>
                      <p className={styles.desc}>{item.deskripsi.slice(0, 120)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </RootLayout>
  );
};

export default Search;
