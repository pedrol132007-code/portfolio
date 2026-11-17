import { useEffect, useRef } from 'react';
import type { Project } from '../../content/types';
import { ui } from '../../content/ui';
import { useLocale } from '../../hooks/useLocale';
import { Icon } from '../ui/Icon';
import { ProjectLinks } from './ProjectLinks';
import { StackList } from './StackList';
import styles from './ProjectRow.module.css';

/** Projeto secundário: uma linha que abre para mostrar os detalhes. */
export function ProjectRow({ project }: { project: Project }) {
  const { t } = useLocale();
  const image = project.images?.[0];
  const detailsRef = useRef<HTMLDetailsElement>(null);

  // Links como #smartcane (vindos das habilidades) já abrem o projeto
  useEffect(() => {
    const openIfTarget = () => {
      if (window.location.hash === `#${project.slug}` && detailsRef.current) detailsRef.current.open = true;
    };
    openIfTarget();
    window.addEventListener('hashchange', openIfTarget);
    return () => window.removeEventListener('hashchange', openIfTarget);
  }, [project.slug]);

  return (
    <li id={project.slug} className={styles.row}>
      <details ref={detailsRef} className={styles.details}>
        <summary className={styles.summary}>
          <span className={styles.name}>{project.name}</span>
          <span className={styles.line}>{t(project.summary)}</span>
          <span className={styles.kind}>{t(project.kind)}</span>
          <Icon name="chevronDown" size={20} className={styles.chevron} />
        </summary>

        <div className={`${styles.body} ${image ? styles.withImage : ''}`}>
          <div className={styles.copy}>
            <div>
              <h4 className={styles.label}>{t(ui.project.problem)}</h4>
              <p>{t(project.problem)}</p>
            </div>
            {project.highlights.length > 0 && (
              <ul role="list" className={styles.highlights}>
                {project.highlights.map((h, i) => (
                  <li key={i}>{t(h)}</li>
                ))}
              </ul>
            )}
            <StackList items={project.stack} />
            <ProjectLinks links={project.links} name={project.name} />
          </div>
          {image && (
            <img
              className={styles.image}
              src={image.src}
              alt={t(image.alt)}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
            />
          )}
        </div>
      </details>
    </li>
  );
}
