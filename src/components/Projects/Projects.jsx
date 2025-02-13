import { useRef, useEffect } from 'react';

import styles from './Projects.module.css';

import projects from '../../data/projects.json';

import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const projectsContainerRef = useRef(null);

  useEffect(() => {
    const projectsContainer = projectsContainerRef.current;
    if (projectsContainer) {
      const onWheel = (e) => {
        const isScrollAtStart = projectsContainer.scrollLeft == 0;
        const isScrollAtEnd = projectsContainer.scrollLeft >= projectsContainer.scrollWidth - projectsContainer.clientWidth - 15;
        console.log(projectsContainer.scrollLeft);
        if (!(isScrollAtStart && e.deltaY < 0) && !(isScrollAtEnd && e.deltaY > 0)) {
          e.preventDefault();
          projectsContainer.scrollLeft += e.deltaY;
        }
      };
      projectsContainer.addEventListener('wheel', onWheel);
      return () => projectsContainer.removeEventListener('wheel', onWheel);
    }
  });

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
