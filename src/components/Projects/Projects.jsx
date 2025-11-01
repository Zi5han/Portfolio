import { useRef, useEffect } from 'react';

import styles from './Projects.module.css';

import projects from '../../data/projects.json';

import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const projectsContainerRef = useRef(null);
  const rootRef = useRef(document.getElementById('root'));
  const htmlRef = useRef(document.documentElement);

  useEffect(() => {
    const el = projectsContainerRef.current;
    if (!el) return;
    const root = rootRef.current;
    const html = htmlRef.current;

    const EPS = 1;

    // Use a rAF queue to avoid layout thrash on very fast wheels
    let queued = false;
    let pendingDelta = 0;

    function atStart() {
      return el.scrollLeft <= 0 + EPS;
    }
    function atEnd() {
      return el.scrollLeft >= el.scrollWidth - el.clientWidth - EPS;
    }

    function flush() {
      queued = false;
      if (pendingDelta === 0) return;

      const next = Math.max(
        0,
        Math.min(el.scrollLeft + pendingDelta, el.scrollWidth - el.clientWidth)
      );
      el.scrollLeft = next;
      pendingDelta = 0;
    }

    const onWheel = (e) => {
      if (window.innerWidth <= 830) return;

      const horizontalScrollDelta = e.deltaX + e.deltaY * 0.75;
      if (horizontalScrollDelta === 0) return;

      const canScrollLeft = !atStart();
      const canScrollRight = !atEnd();

      const containerScrollPosition =
        Math.round(el.offsetTop - (window.innerHeight - el.clientHeight) / 2);

      const isUnderThreshold = html.scrollTop + e.deltaY >= containerScrollPosition;
      const isOverThreshold = html.scrollTop + e.deltaY <= containerScrollPosition;

      if (!(isOverThreshold && !canScrollLeft) && !(isUnderThreshold && !canScrollRight)) {
        e.preventDefault();

        document.documentElement.scrollTop = containerScrollPosition;

        pendingDelta += horizontalScrollDelta;
        if (!queued) {
          queued = true;
          requestAnimationFrame(flush);
        }
      }
    };
    root.addEventListener('wheel', onWheel, { passive: false });
    return () => root.removeEventListener('wheel', onWheel);
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
