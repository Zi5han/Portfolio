import styles from './Hero.module.css';

import { getAssetPath } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <h1 className={styles.mainTitle}>{"Hey, I'm Zishan"}</h1>
          <p className={styles.description}>
            {"I'm an aspiring game developer with knowledge in different areas. Check out my projects."}
          </p>
          <a className={styles.contactBtn} href='mailto:trayten01@gmail.com'>
            {'Contact me'}
          </a>
        </div>
        <img src={getAssetPath('hero/zi5han_pic.png')} alt='Zishan Profile Picture' className={styles.heroImg} />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
