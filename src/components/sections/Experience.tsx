import { education, experience } from '../../content/profile';
import { isPending } from '../../content/types';
import { ui } from '../../content/ui';
import { useLocale } from '../../hooks/useLocale';
import { Pending } from '../ui/Pending';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';
import { StackList } from '../projects/StackList';
import styles from './Experience.module.css';

export function Experience() {
  const { t } = useLocale();
  return (
    <Section id="experiencia" title={t(ui.sections.experience)}>
      <ol role="list" className={styles.list}>
        {experience.map((job) => (
          <Reveal as="li" key={job.company} className={styles.item}>
            <div className={styles.top}>
              <h3 className={styles.company}>{job.company}</h3>
              <p className={styles.period}>{isPending(job.period) ? <Pending value={job.period} /> : t(job.period)}</p>
            </div>
            <p className={styles.role}>{t(job.role)}</p>
            <div className={styles.details}>
              {isPending(job.summary) ? <Pending value={job.summary} /> : <p>{t(job.summary)}</p>}
              {isPending(job.tools) ? <Pending value={job.tools} /> : <StackList items={job.tools} />}
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal className={styles.education} delay={60}>
        <h3 className={styles.subTitle} id="formacao">
          {t(ui.sections.education)}
        </h3>
        <div className={styles.item}>
          <div className={styles.top}>
            <p className={styles.company}>{education.school}</p>
            <p className={styles.period}>
              {isPending(education.period) ? <Pending value={education.period} /> : t(education.period)}
            </p>
          </div>
          <p className={styles.role}>{t(education.degree)}</p>
        </div>
      </Reveal>
    </Section>
  );
}
