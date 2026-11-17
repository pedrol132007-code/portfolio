import { about } from '../../content/profile';
import { ui } from '../../content/ui';
import { useLocale } from '../../hooks/useLocale';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';
import styles from './About.module.css';

export function About() {
  const { t } = useLocale();
  return (
    <Section id="sobre" title={t(ui.sections.about)}>
      <Reveal className={styles.text}>
        {about.paragraphs.map((p, i) => (
          <p key={i} className={i === 0 ? styles.lead : undefined}>
            {t(p)}
          </p>
        ))}
      </Reveal>
      <Reveal as="dl" className={styles.facts} delay={80}>
        {about.facts.map((f, i) => (
          <div key={i} className={styles.fact}>
            <dt>{t(f.label)}</dt>
            <dd>{t(f.value)}</dd>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
