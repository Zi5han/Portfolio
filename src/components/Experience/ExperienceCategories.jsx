import styles from './ExperienceCategories.module.css';

import PropTypes from 'prop-types';

import { getAssetPath } from '../../utils';

export const ExperienceCategories = ({ skillCategory: { category_title, skills } }) => {
  return (
    <div className={styles.categoryContainer}>
      <h3 className={styles.categoryTitle}>{category_title}</h3>
      <div className={styles.skillsContainer}>
        {skills.map((skillItem, index2) => {
          return (
            <div key={index2} className={styles.skillItem}>
              <div className={styles.skillImageContainer}>
                <img src={getAssetPath(skillItem.imageSrc)} alt={skillItem.title} />
              </div>
              <p>{skillItem.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

ExperienceCategories.propTypes = {
  skillCategory: PropTypes.shape({
    category_title: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};
