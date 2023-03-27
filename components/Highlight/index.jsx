import styles from 'ahmad/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Highlight = ({ data }) => {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <h1 className={styles.trend}>Berita Utama</h1>
        <div className={styles.wrap}>
          {data.length > 0 && (
            <Link href={`detail/${data[0].id}`}>
              <div className={styles.left}>
                <Image className={styles.img_left} src={data[0].foto} width={558} height={300} />
                <div className={styles.content_left}>
                  <p className={styles.tgl}>
                    <span className={styles.span}>{data[0].span}</span> | Mei 14, 2022
                  </p>
                  <h1 className={styles.head}>{data[0].title}</h1>
                  <p className={styles.last}>{data[0].time}</p>
                </div>
              </div>
            </Link>
          )}
          <div className={styles.right}>
            {data.slice(1).map((item) => (
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
