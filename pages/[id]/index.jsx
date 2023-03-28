import { Feed, Highlight, RootLayout } from 'ahmad/components';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from 'ahmad/styles/kategori.module.css';
import Not from 'ahmad/pages/_error';

const Menu = () => {
  const router = useRouter();
  const { id } = router.query;
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const filterUtama = results.filter((item) => item.main);
  const filterData = results.filter((item) => item.cate);
  const url = '/data/data.json';

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      const filteredData = data.filter((item) => item.category === id);
      setResults(filteredData);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (results.length === 0) {
    return <Not />;
  }

  return (
    <RootLayout title={id}>
      <section className={styles.kategori}>
        <div className={styles.container}>
          <Highlight data={filterUtama} />
          <Feed data={filterData} title={'Berita Terkini'} link={'/detail'} />
        </div>
      </section>
    </RootLayout>
  );
};

export default Menu;
