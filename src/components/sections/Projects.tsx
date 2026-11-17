import { projects } from '../../content/projects';
import { ui } from '../../content/ui';
import { useLocale } from '../../hooks/useLocale';
import { ProjectFeature } from '../projects/ProjectFeature';
import { ProjectRow } from '../projects/ProjectRow';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';
import styles from './Projects.module.css';

export function Projects() {
  const { t } = useLocale();
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <Section id="projetos" title={t(ui.sections.projects)} intro={t(ui.sections.projectsIntro)} layout="stack">
      <div className={styles.featured}>
        {featured.map((p, i) => (
          <ProjectFeature key={p.slug} project={p} flip={i % 2 === 1} />
        ))}
      </div>

      {others.length > 0 && (
        <Reveal className={styles.more}>
          <h3 className={styles.moreTitle}>{t(ui.sections.moreProjects)}</h3>
          <ul role="list" className={styles.list}>
            {others.map((p) => (
              <ProjectRow key={p.slug} project={p} />
            ))}
          </ul>
        </Reveal>
      )}
    </Section>
  );
}
