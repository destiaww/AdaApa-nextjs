import styles from 'ahmad/styles/now.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Terkini = ({ data }) => {
  const filterNow = data.filter((item) => item.now);
  const filterPopuler = data.filter((item) => item.populer);
  const filterComment = data.filter((item) => item.comment);
  const slicedData = filterNow.slice(1);

  return (
    <section className={styles.now}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.head_left}>News Feed</h1>
          <Link href={`detail/${filterNow[0].id}`}>
            <div className={styles.utama}>
              <div className={styles.content}>
                <p className={styles.date}>
                  <span className={styles.span}>{filterNow[0].span}</span> | juni 14, 2022
                </p>
                <h1 className={styles.head}>{filterNow[0].title}</h1>
                <p className={styles.desc}>
                  <span className={styles.span}>{filterNow[0].span}</span> - {filterNow[0].deskripsi.slice(0, 82)}...
                </p>
              </div>
              <Image className={styles.img_main} src={filterNow[0].foto} width={460} height={300} />
            </div>
          </Link>

          <div className={styles.card}>
            {slicedData.map((item) => (
              <Link href={`detail/${item.id}`}>
                <div className={styles.card_content}>
                  <Image className={styles.img_left} src={item.foto} width={266} height={157} />
                  <div className={styles.wrap}>
                    <h1 className={styles.wrap_head}>{item.title}</h1>
                    <p className={styles.wrap_desc}>
                      <span className={styles.spand}>{item.span}</span> {item.deskripsi.slice(0, 66)}...
                    </p>
                    <p className={styles.wrap_date}>{item.time}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.wrapper_top}>
            <h1 className={styles.head_right}>Berita terpopuler</h1>
            {filterPopuler.map((item, index) => (
              <Link href={`detail/${item.id}`}>
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
              <Link href={`detail/${item.id}`}>
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
    </section>
  );
};

export default Terkini;
