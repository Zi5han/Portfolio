import styles from './Contact.module.css';

import { getAssetPath } from '../../utils';

export const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
      <div className={styles.contactText}>
        <h2>{'Contact'}</h2>
        <p>{'Feel free to reach out!'}</p>
      </div>
      <ul className={styles.contactInfo}>
        <li className={styles.contactInfoEntry}>
          <img src={getAssetPath('contact/emailIcon.png')} alt='Email Icon' />
          <a href='mailto:contact@zi5han.dev'>contact@zi5han.dev</a>
        </li>
        <li className={styles.contactInfoEntry}>
          <img src={getAssetPath('contact/linkedinIcon.png')} alt='LinkedIn Icon' />
          <a href='https://linkedin.com/in/zi5han/'>linkedin.com/in/zi5han/</a>
        </li>
        <li className={styles.contactInfoEntry}>
          <img src={getAssetPath('contact/githubIcon.png')} alt='GitHub Icon' />
          <a href='https://github.com/Zi5han'>github.com/zi5han</a>
        </li>
        <li className={styles.contactInfoEntry}>
          <img src={getAssetPath('contact/discordIcon.png')} alt='Discord Icon' />
          <a href="https://discordapp.com/users/zi5han">@zi5han</a>
        </li>
      </ul>
    </footer>
  );
};
