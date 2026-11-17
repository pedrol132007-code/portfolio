import type { Project } from '../../content/types';
import { ui } from '../../content/ui';
import { useLocale } from '../../hooks/useLocale';
import { Reveal } from '../ui/Reveal';
import { ProjectLinks } from './ProjectLinks';
import { ProjectVisual } from './ProjectVisual';
import { StackList } from './StackList';
import styles from './ProjectFeature.module.css';

export function ProjectFeature({ project, flip }: { project: Project; flip?: boolean }) {
  const { t } = useLocale();
  const titleId = `${project.slug}-title`;

  return (
    <article id={project.slug} aria-labelledby={titleId} className={`${styles.feature} ${flip ? styles.flip : ''}`}>
      <Reveal className={styles.head}>
        <p className={styles.meta}>
          <span>{t(project.kind)}</span>
          {project.status && <span className={styles.status}>{t(project.status)}</span>}
        </p>
        <h3 id={titleId} className={styles.name}>
          {project.name}
        </h3>
        <p className={styles.summary}>{t(project.summary)}</p>
      </Reveal>

      <Reveal className={styles.copy} delay={60}>
        <div className={styles.block}>
          <h4 className={styles.label}>{t(ui.project.problem)}</h4>
          <p>{t(project.problem)}</p>
        </div>

        {project.highlights.length > 0 && (
          <div className={styles.block}>
            <h4 className={styles.label}>{t(ui.project.built)}</h4>
            <ul role="list" className={styles.highlights}>
              {project.highlights.map((h, i) => (
                <li key={i}>{t(h)}</li>
              ))}
            </ul>
          </div>
        )}

        <div className={styles.block}>
          <h4 className={styles.label}>{t(ui.project.stack)}</h4>
          <StackList items={project.stack} />
        </div>

        <ProjectLinks links={project.links} name={project.name} />
      </Reveal>

      <Reveal className={styles.visual} delay={120}>
        <ProjectVisual project={project} />
      </Reveal>
    </article>
  );
}
