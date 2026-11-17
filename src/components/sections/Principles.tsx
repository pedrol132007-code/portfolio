import { projects } from '../../content/projects';
import { principles } from '../../content/skills';
import { ui } from '../../content/ui';
import { useLocale } from '../../hooks/useLocale';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';
import styles from './Principles.module.css';

export function Principles() {
  const { t } = useLocale();
  return (
    <Section id="como-construo" title={t(ui.sections.principles)} intro={t(ui.sections.principlesIntro)}>
      <ul role="list" className={styles.list}>
        {principles.map((p, i) => {
          const project = projects.find((x) => x.slug === p.evidence);
          return (
            <Reveal as="li" key={i} className={styles.item} delay={(i % 2) * 70}>
              <h3 className={styles.title}>{t(p.title)}</h3>
              <p className={styles.body}>{t(p.body)}</p>
              {project && (
                <a href={`#${project.slug}`} className={styles.evidence}>
                  {t(ui.project.shownIn)} {project.name}
                </a>
              )}
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
