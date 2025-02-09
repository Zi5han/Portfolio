import React from 'react';

import styles from './ProjectCard.module.css';
import PropTypes from 'prop-types';
import { getAssetPath } from '../../utils';

export const ProjectCard = ({
  projectItem: { title, imageSrc, description, skills, demo, source }
}) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={getAssetPath(imageSrc)}
        alt={`Image of ${title}`}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skillsList}>
        {skills.map((skillItem, index) => {
          return (
            <li className={styles.skillItem} key={index}>
              {skillItem}
            </li>
          );
        })}
      </ul>
      <div className={styles.linksContainer}>
        <a href={demo}>Demo</a>
        <a href={source}>Source</a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  projectItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    demo: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired
  }).isRequired
};
