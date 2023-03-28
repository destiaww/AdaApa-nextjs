import React, { useState, useEffect } from 'react';
import styles from 'ahmad/styles/carousel.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Carousel = () => {
  const [results, setResults] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const url = '/data/data.json';

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      const FilterCaro = data.filter((item) => item.caro);
      setResults(FilterCaro);
    };

    fetchData();
  }, [url]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((activeIndex + 1) % results.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIndex, results.length]);

  return (
    <section className={styles.carousel}>
      <div className={styles.container}>
        {results.map((slide, index) => (
          <Link href={`detail/${slide.id}`}>
            <div key={index} className={`${styles.wrapper} ${index === activeIndex ? styles.active : ''}`}>
              <Image className={styles.img} src={slide.foto} width={1150} height={500} />
              <div className={styles.content}>
                <p className={styles.date}>
                  <span className={styles.span}>AdaApa</span> {slide.date}
                </p>
                <h1 className={styles.head}>{slide.title}</h1>
                <p className={styles.desc}>
                  <span className={styles.span}>{slide.span}</span> {slide.deskripsi.slice(0, 119)}...
                </p>
                <p className={styles.ago}>{slide.time}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
