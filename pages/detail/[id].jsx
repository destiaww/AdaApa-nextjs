import styles from 'ahmad/styles/detail.module.css';
import RootLayout from 'ahmad/components/Layout';
import Image from 'next/image';
import { BiHeart, BiShareAlt, BiComment } from 'react-icons/bi';
import Feed from 'ahmad/components/feed';
import Data from 'ahmad/public/data/data';
import Banner from 'ahmad/components/banner';
import Link from 'next/link';

const Index = ({ data }) => {
  const paragraphs = data.deskripsi.split('\n');

  const filterData = Data.filter((item) => item.category === data.category && item.id !== data.id).slice(0, 4);

  return (
    <>
      <RootLayout title={data.title}>
        <section className={styles.detail}>
          <div className={styles.container}>
            <p className={styles.back}>
              <Link className={styles.back} href={'/'}>
                {' '}
                Home {'>'}{' '}
              </Link>{' '}
              {data.category}
            </p>
            <div className={styles.content}>
              <h1 className={styles.head}>{data.title}</h1>
              <p>Kompas.com - 06/03/2023, 01:25 WIB</p>
              <div className={styles.icon}>
                <div className={styles.icons}>
                  <BiHeart className={styles.ion} /> 20k
                </div>
                <div className={styles.icons}>
                  <BiComment className={styles.ion} /> 213
                </div>
                <div className={styles.icons}>
                  <BiShareAlt className={styles.ion} /> 80
                </div>
              </div>
              <Image className={styles.img} src={data.foto} width={1150} height={500} />
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <Feed data={filterData} link={`/detail`} title="Berita Sama" />
        <Banner />
      </RootLayout>
    </>
  );
};

export default Index;

export async function getStaticPaths() {
  try {
    const paths = await Data.map((item) => ({
      params: { id: item.id.toString() },
    }));
    return { paths, fallback: false };
  } catch (error) {
    console.log('Error Cuy');
  }
}

export async function getStaticProps({ params }) {
  try {
    const data = await Data.find((item) => item.id.toString() === params.id);
    return { props: { data } };
  } catch (error) {
    console.log('Error Cuy');
  }
}
