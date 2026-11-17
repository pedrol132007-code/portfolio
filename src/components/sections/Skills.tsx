import { projects } from '../../content/projects';
import { skillGroups } from '../../content/skills';
import { isPending } from '../../content/types';
import { ui } from '../../content/ui';
import { useLocale } from '../../hooks/useLocale';
import { Pending } from '../ui/Pending';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';
import styles from './Skills.module.css';

/** Referências que não são projetos, como o estágio. */
const extraRefs: Record<string, { name: string; href: string }> = {
  benner: { name: 'Benner', href: '#experiencia' },
};

const refOf = (slug: string) =>
  extraRefs[slug] ?? { name: projects.find((p) => p.slug === slug)?.name ?? slug, href: `#${slug}` };

export function Skills() {
  const { t } = useLocale();
  return (
    <Section id="habilidades" title={t(ui.sections.skills)} intro={t(ui.sections.skillsIntro)}>
      <div className={styles.groups}>
        {skillGroups.map((group, gi) => (
          <Reveal key={gi} className={styles.group}>
            <h3 className={styles.groupTitle}>{t(group.title)}</h3>
            {isPending(group.skills) ? (
              <Pending value={group.skills} />
            ) : (
              <ul role="list" className={styles.skills}>
                {group.skills.map((skill) => (
                  <li key={t(skill.name)} className={styles.skill}>
                    <span className={styles.skillName}>{t(skill.name)}</span>
                    <span className={styles.usedIn}>
                      <span className="sr-only">{t(ui.project.shownIn)}: </span>
                      {skill.usedIn.map((slug, i) => (
                        <span key={slug}>
                          {i > 0 && ', '}
                          <a href={refOf(slug).href}>{refOf(slug).name}</a>
                        </span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
