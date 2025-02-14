import { useRef, useEffect } from 'react';

import styles from './Projects.module.css';

import projects from '../../data/projects.json';

import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const projectsContainerRef = useRef(null);
  const rootRef = useRef(document.getElementById('root'));
  const htmlRef = useRef(document.documentElement);

  useEffect(() => {
    const projectsContainer = projectsContainerRef.current;
    const root = rootRef.current;
    const html = htmlRef.current;

    if (projectsContainer) {
      const onWheel = (e) => {
        const isScrollAtStart = projectsContainer.scrollLeft == 0;
        const maxScrollWidth = projectsContainer.scrollWidth - projectsContainer.clientWidth;
        const isScrollAtEnd = projectsContainer.scrollLeft >= maxScrollWidth - 10;

        const scrollDistance = html.scrollTop;
        const newScrollDistance = scrollDistance + e.deltaY;

        const projectsContainerScrollThresholf = projectsContainer.offsetTop - (window.innerHeight - projectsContainer.clientHeight) / 2;

        if (
          !(isScrollAtStart && e.deltaY < 0 && newScrollDistance < projectsContainerScrollThresholf) &&
          !(isScrollAtEnd && e.deltaY > 0 && newScrollDistance > projectsContainerScrollThresholf)
        ) {
          e.preventDefault();
          html.style.overflow = 'hidden';
          html.scrollTop = projectsContainerScrollThresholf;
          projectsContainer.scrollLeft += e.deltaY * 2;
        } else {
          html.style.overflow = 'unset';
          if (isScrollAtEnd) projectsContainer.scrollLeft = projectsContainer.scrollWidth;
        }
      };
      root.addEventListener('wheel', onWheel);
      return () => root.removeEventListener('wheel', onWheel);
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
