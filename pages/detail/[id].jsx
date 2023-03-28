import styles from 'ahmad/styles/detail.module.css';
import Image from 'next/image';
import { BiHeart, BiShareAlt, BiComment } from 'react-icons/bi';
import Data from 'ahmad/public/data/data';
import { RootLayout, Feed, Banner } from 'ahmad/components';
import Link from 'next/link';

const Index = ({ data }) => {
  const paragraphs = data.deskripsi.split('\n');
  const filterPopuler = Data.filter((item) => item.populer);
  const filterComment = Data.filter((item) => item.comment);
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
            </div>
            <div className={styles.wrap}>
              <div className={styles.content_left}>
                <Image className={styles.img_head} src={data.foto} width={800} height={500} />
                {paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className={styles.content_right}>
                <div className={styles.wrapper_top}>
                  <h1 className={styles.head_right}>Berita terpopuler</h1>
                  {filterPopuler.map((item, index) => (
                    <Link href={`/detail/${item.id}`}>
                      <div className={styles.news}>
                        <h1 className={styles.no}>#{index + 1}</h1>
                        <div className={styles.news_content}>
                          <h1 className={styles.news_head}>{item.title}</h1>
                          <p className={styles.news_desc}>AdaApa | {item.time}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className={styles.wrapper_bottom}>
                  <h1 className={styles.head_right}>Komentar Terbanyak</h1>
                  {filterComment.map((item) => (
                    <Link href={`/detail/${item.id}`}>
                      <div className={styles.news}>
                        <Image src={'/comment.svg'} width={24} height={24} />
                        <div className={styles.news_content}>
                          <h1 className={styles.news_head}>{item.title}</h1>
                          <p className={styles.news_desc}>AdaApa | {item.time}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
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
