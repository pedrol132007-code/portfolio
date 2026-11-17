import type { ProjectLink } from '../../content/types';
import { ui } from '../../content/ui';
import { useLocale } from '../../hooks/useLocale';
import { TextLink } from '../ui/TextLink';
import styles from './ProjectLinks.module.css';

export function ProjectLinks({ links, name }: { links: ProjectLink[]; name: string }) {
  const { t } = useLocale();
  if (!links.length) return null;
  return (
    <div className={styles.links}>
      {[...links].sort((a, b) => (a.kind === 'live' ? -1 : b.kind === 'live' ? 1 : 0)).map((l) => (
        <span key={l.href} className={styles.item}>
          <TextLink href={l.href} icon={l.kind === 'repo' ? 'github' : undefined} variant={l.kind === 'live' ? 'primary' : 'quiet'}>
            {t(l.kind === 'repo' ? ui.project.repo : ui.project.live)}
            <span className="sr-only"> {name}</span>
          </TextLink>
          {l.note && <span className={styles.note}>{t(l.note)}</span>}
        </span>
      ))}
    </div>
  );
}
