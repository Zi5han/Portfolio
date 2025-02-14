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
        if (window.innerWidth <= 830) return;

        const isScrollAtStart = projectsContainer.scrollLeft == 0;
        const maxScrollWidth = projectsContainer.scrollWidth - projectsContainer.clientWidth;
        const isScrollAtEnd = projectsContainer.scrollLeft >= maxScrollWidth - 10;

        const scrollDistance = html.scrollTop;
        const newScrollDistance = scrollDistance + e.deltaY;

        const projectsContainerScrollThresholf =
          projectsContainer.offsetTop - (window.innerHeight - projectsContainer.clientHeight) / 2;
        const crossedThresholdUpwards =
          scrollDistance > projectsContainerScrollThresholf && newScrollDistance <= projectsContainerScrollThresholf - 5;
        const crossedThresholdDownwards =
          scrollDistance < projectsContainerScrollThresholf && newScrollDistance >= projectsContainerScrollThresholf + 5;

        if (
          crossedThresholdUpwards ||
          crossedThresholdDownwards ||
          (!(isScrollAtStart && (newScrollDistance < projectsContainerScrollThresholf || e.deltaY < 0)) &&
            !(isScrollAtEnd && (newScrollDistance > projectsContainerScrollThresholf || e.deltaY > 0)))
        ) {
          e.preventDefault();
          html.style.overflow = 'hidden';
          if (html.scrollTimeout) {
            clearTimeout(html.scrollTimeout);
          }
          html.scrollTimeout = setTimeout(() => {
            html.style.overflow = 'unset';
          }, 1000);
          html.scrollTop = projectsContainerScrollThresholf;
          projectsContainer.scrollLeft += e.deltaX + e.deltaY * 1.5;
        } else {
          html.style.overflow = 'unset';
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
