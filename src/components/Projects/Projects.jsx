import React from 'react';

import styles from './Projects.module.css';
import projects from '../../data/projects.json';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{'Projects'}</h2>
      <div className={styles.projectsContainer}>
        {projects.map((projectItem, index) => {
          return <ProjectCard key={index} projectItem={projectItem} />;
        })}
      </div>
    </section>
  );
};
