import styles from 'ahmad/styles/footer.module.css';
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.footer_widget}>
            <a href="#">
              <Image src={'/logo.svg'} width={150} height={100} />
            </a>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deserunt magni recusandae ut! Natus?</p>
            <ul className={styles.socials}>
              <li>
                <Link href="#">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer_widget}>
            <h6>Category</h6>
            <ul className={styles.links}>
              <li>
                <Link href={`/`}>Home</Link>
              </li>
              <li>
                <Link href={`/Business`}>Businnes</Link>
              </li>
              <li>
                <Link href={`/politik`}>Politik</Link>
              </li>
              <li>
                <Link href={`/Entertainment`}>Entertainment</Link>
              </li>
              <li>
                <Link href={`/Lifestyle`}>Lifestyle</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer_widget}>
            <h6>Layanan</h6>
            <ul className={styles.links}>
              <li>
                <Link href="#">Forum</Link>
              </li>
              <li>
                <Link href="#">AdaApa Event</Link>
              </li>
              <li>
                <Link href="#">seo optimization</Link>
              </li>
              <li>
                <Link href="#">blog writing</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer_widget}>
            <h6>Help &amp; Support</h6>
            <ul className={styles.links}>
              <li>
                <a href="#">support center</a>
              </li>
              <li>
                <a href="#">live chat</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">terms &amp; conditions</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.copyright_wrapper}>
          <p>
            © AdaApa 2023 - All rights reserved
            <a href="#" target="blank"></a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
