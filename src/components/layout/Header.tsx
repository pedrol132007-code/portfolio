import { useEffect, useState } from 'react';
import { profile } from '../../content/profile';
import { ui } from '../../content/ui';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useLocale } from '../../hooks/useLocale';
import { useTheme } from '../../hooks/useTheme';
import { Icon } from '../ui/Icon';
import { navIds, navItems } from './nav';
import styles from './Header.module.css';

export function Header() {
  const { t, locale, setLocale } = useLocale();
  const { theme, toggle } = useTheme();
  const active = useActiveSection(navIds);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Menu móvel: fecha com Esc e trava a rolagem do fundo enquanto aberto
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const nextLocale = locale === 'pt' ? 'en' : 'pt';

  return (
    <header className={`${styles.header} ${scrolled ? styles.solid : ''} ${open ? styles.menuOpen : ''}`}>
      <div className={`container ${styles.bar}`}>
        <a href="#inicio" className={styles.brand} onClick={() => setOpen(false)}>
          <span className={styles.brandFull}>{profile.name}</span>
          <span className={styles.brandShort}>Pedro Lucas</span>
        </a>

        <nav aria-label={t(ui.nav.label)} className={`${styles.nav} ${open ? styles.navOpen : ''}`} id="menu-principal">
          <ul role="list" className={styles.links}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={styles.link}
                  aria-current={active === item.id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {t(item.label)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.tools}>
          <button
            type="button"
            className={styles.tool}
            onClick={() => setLocale(nextLocale)}
            aria-label={t(ui.toggles.language)}
            title={t(ui.toggles.language)}
            lang={nextLocale === 'pt' ? 'pt-BR' : 'en'}
          >
            <span className={styles.lang}>{t(ui.toggles.languageShort)}</span>
          </button>
          <button
            type="button"
            className={styles.tool}
            onClick={toggle}
            aria-label={t(theme === 'dark' ? ui.toggles.toLight : ui.toggles.toDark)}
            title={t(theme === 'dark' ? ui.toggles.toLight : ui.toggles.toDark)}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>
          <button
            type="button"
            className={`${styles.tool} ${styles.menuButton}`}
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="menu-principal"
            aria-label={t(open ? ui.nav.closeMenu : ui.nav.openMenu)}
          >
            <Icon name={open ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
