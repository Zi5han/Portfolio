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
          <a href='mailto:myemail@email.com'>myemail@email.com</a>
        </li>
        <li className={styles.contactInfoEntry}>
          <img
            src={getAssetPath('contact/linkedinIcon.png')}
            alt='LinkedIn Icon'
          />
          <a href='https://linkedin.com/myname'>linkedin.com/myname</a>
        </li>
        <li className={styles.contactInfoEntry}>
          <img src={getAssetPath('contact/githubIcon.png')} alt='GitHub Icon' />
          <a href='https://github.com/myname'>github.com/myname</a>
        </li>
        <li className={styles.contactInfoEntry}>
          <img src={getAssetPath('contact/discordIcon.png')} alt='Discord Icon' />
          <a>zi5han</a>
        </li>
      </ul>
    </footer>
  );
};
