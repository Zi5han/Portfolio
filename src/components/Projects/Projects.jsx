import { useRef } from 'react';

import styles from './Projects.module.css';

import projects from '../../data/projects.json';

import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const projectsContainerRef = useRef(null);
  return (
    <section className={styles.container} id='projects'>
      <h2 className={styles.title}>{'Projects'}</h2>
      <div className={styles.projectsContainer} ref={projectsContainerRef}>
        {projects.map((projectItem, index) => {
          return <ProjectCard key={index} projectItem={projectItem} />;
        })}
      </div>
    </section>
  );
};
