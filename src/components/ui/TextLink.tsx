import type { ReactNode } from 'react';
import { ui } from '../../content/ui';
import { useLocale } from '../../hooks/useLocale';
import { Icon, type IconName } from './Icon';
import styles from './TextLink.module.css';

type Props = {
  href: string;
  children: ReactNode;
  icon?: IconName;
  variant?: 'primary' | 'quiet' | 'plain';
  external?: boolean;
};

/** Link com aparência de botão. Links externos abrem em nova aba e avisam leitores de tela. */
export function TextLink({ href, children, icon, variant = 'quiet', external = /^https?:/.test(href) }: Props) {
  const { t } = useLocale();
  return (
    <a
      href={href}
      className={`${styles.link} ${styles[variant]}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {icon && <Icon name={icon} size={18} />}
      <span>{children}</span>
      {external && (
        <>
          <Icon name="arrowUpRight" size={16} className={styles.out} />
          <span className="sr-only">{t(ui.newTab)}</span>
        </>
      )}
    </a>
  );
}
