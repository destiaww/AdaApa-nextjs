import RootLayout from 'ahmad/components/Layout';
import styles from 'ahmad/styles/search.module.css';

const Index = () => {
  return (
    <RootLayout title="AdaApaSearch">
      <section className={styles.search}>
        <div className={styles.container}>
          <p>
            {' '}
            Hasil pencarian <span>""</span> , 0 hasil ditemukan
          </p>
        </div>
      </section>
    </RootLayout>
  );
};

export default Index;
