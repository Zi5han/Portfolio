import React from 'react';
import styles from './Hero.module.css';
import { getAssetPath } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.mainTitle}>{"Hi, I'm Zishan"}</h1>
        <p className={styles.description}>
          {
            "I'm a full-stack developer With 5 years of experience using React and NodeJS. Reach out if you'd like to learn more!"
          }
        </p>
        <a className={styles.contactBtn} href='mailto:myemail@email.com'>
          Contact me
        </a>
      </div>
      <img
        src={getAssetPath('hero/heroImage.png')}
        alt='Hero'
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
