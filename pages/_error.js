import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from 'ahmad/styles/404.module.css';
import Image from 'next/image';

function Error({ statusCode }) {
  const router = useRouter();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let interval = null;
    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <Image src={'/404.png'} className={styles.img} width={100} height={100} />
        <p class={styles.title}>Ooooops!</p>
        {statusCode ? <p>An error {statusCode} occurred on server</p> : <p>An error occurred on client</p>}
        <p>You will be redirected to the home page in {seconds} seconds...</p>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
