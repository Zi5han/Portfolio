import styles from './Experience.module.css';

import new_skills from '../../data/new_skills.json';
import history from '../../data/history.json';

import { getAssetPath } from '../../utils';
import { ExperienceCategories } from './ExperienceCategories';

export const Experience = () => {
  return (
    <section className={styles.container} id='experience'>
      <h2 className={styles.title}>{'Experience and Carrier'}</h2>
      <div className={styles.content}>
        <div className={styles.skillsPanel}>
          {new_skills.map((skillCategory, index1) => {
            return <ExperienceCategories key={index1} skillCategory={skillCategory}/>;
          })}
        </div>
        <div className={styles.historyPanel}>
          <ul className={styles.historyList}>
            {history.map((historyItem, index) => {
              return (
                <li key={index} className={styles.historyItem}>
                  <img
                    src={getAssetPath(historyItem.imageSrc)}
                    alt={`${historyItem.organisation} Logo`}
                  />
                  <div className={styles.historyItemDetails}>
                    <h3>{`${historyItem.role}`}</h3>
                    <p
                      className={styles.hisotryItemOrga}
                    >{`${historyItem.organisation}`}</p>
                    <p
                      className={styles.historyItemDate}
                    >{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                    <ul>
                      {historyItem.experiences.map((experienceItem, index) => {
                        return <li key={index}>{experienceItem}</li>;
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
