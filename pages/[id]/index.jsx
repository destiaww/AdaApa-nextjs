import { RootLayout } from 'ahmad/components';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Menu = () => {
  const router = useRouter();
  const { id } = router.query;
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <RootLayout title={id}>
      <section>
        <div>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div>
              {results.map((item, index) => (
                <p>{item.category}</p>
              ))}
            </div>
          )}
        </div>
      </section>
    </RootLayout>
  );
};

export default Menu;
