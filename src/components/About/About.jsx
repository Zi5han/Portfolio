import styles from './About.module.css';

import about from '../../data/about.json';

import { getAssetPath as getImageURL } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>{'About Me'}</h2>
      <div className={styles.content}>
        <ul className={styles.aboutList}>
          {about.map((aboutItem, index) => {
            return (
              <li className={styles.aboutItem} key={index}>
                <img src={getImageURL(aboutItem.imagePath)} alt='Cursor icon' />
                <div className={styles.aboutItemText}>
                  <h3>{aboutItem.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: aboutItem.content }}></p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
