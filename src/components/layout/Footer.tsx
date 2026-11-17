import { profile, site } from '../../content/profile';
import { isPending } from '../../content/types';
import { ui } from '../../content/ui';
import { useLocale } from '../../hooks/useLocale';
import { Icon } from '../ui/Icon';
import styles from './Footer.module.css';

export function Footer() {
  const { t, locale } = useLocale();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className={styles.meta}>
          {t(ui.footer.built)}{' '}
          {!isPending(site.sourceUrl) && (
            <a href={site.sourceUrl} target="_blank" rel="noopener noreferrer">
              {t(ui.footer.source)}
            </a>
          )}
        </p>
        <a href="#inicio" className={styles.top}>
          <Icon name="arrowUp" size={16} />
          {locale === 'pt' ? 'Voltar ao topo' : 'Back to top'}
        </a>
      </div>
    </footer>
  );
}
