import React from 'react';
import styles from 'ahmad/styles/banner.module.css';

const Banner = () => {
  return (
    <section className={styles.populer}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h1>Sign Up for Our Newsletters</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
          </div>
          <div className={styles.subs}>
            <input className={styles.input} placeholder="Input your email address her..." type="email" required />
            <button className={styles.button}>Subscribe Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
