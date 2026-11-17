import { profile } from '../../content/profile';
import { ui } from '../../content/ui';
import { useLocale } from '../../hooks/useLocale';
import { TextLink } from '../ui/TextLink';
import styles from './Hero.module.css';

export function Hero() {
  const { t } = useLocale();
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.inner}`}>
        <h1 id="hero-title" className={styles.name}>
          <span className={styles.line} aria-hidden="true">
            {profile.firstLine}
          </span>
          <span className={`${styles.line} ${styles.lineTwo}`} aria-hidden="true">
            {profile.secondLine}
          </span>
          <span className="sr-only">{profile.name}</span>
        </h1>

        <div className={styles.grid}>
          <p className={styles.tagline}>{t(profile.tagline)}</p>
          <div className={styles.side}>
            <p className={styles.intro}>{t(profile.intro)}</p>
            <div className={styles.actions}>
              <TextLink href="#projetos" variant="primary">
                {t(ui.hero.seeProjects)}
              </TextLink>
              <TextLink href={profile.links.github} icon="github">
                GitHub
              </TextLink>
              <TextLink href="#contato">{t(ui.hero.contact)}</TextLink>
            </div>
          </div>
        </div>

        <p className={styles.now}>
          <span className={styles.dot} aria-hidden="true" />
          {t(profile.now)}
        </p>
      </div>
    </section>
  );
}
