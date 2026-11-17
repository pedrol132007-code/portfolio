import { profile } from '../../content/profile';
import { isPending } from '../../content/types';
import { ui } from '../../content/ui';
import { useLocale } from '../../hooks/useLocale';
import { Icon, type IconName } from '../ui/Icon';
import { Pending } from '../ui/Pending';
import { Reveal } from '../ui/Reveal';
import styles from './Contact.module.css';

export function Contact() {
  const { t } = useLocale();
  const { email, linkedin, github } = profile.links;

  const channels: { icon: IconName; label: string; value: string; href: string }[] = [
    { icon: 'linkedin', label: 'LinkedIn', value: 'pedro-lucas-romeiro-dos-santos', href: linkedin },
    { icon: 'github', label: 'GitHub', value: 'pedrol132007-code', href: github },
  ];
  if (!isPending(email)) channels.unshift({ icon: 'mail', label: t(ui.contact.email), value: email, href: `mailto:${email}` });

  return (
    <section id="contato" aria-labelledby="contato-title" className={styles.contact}>
      <div className="container">
        <Reveal className={styles.head}>
          <h2 id="contato-title" className={styles.title}>
            {t(ui.contact.heading)}
          </h2>
          <p className={styles.body}>{t(ui.contact.body)}</p>
        </Reveal>

        <Reveal as="ul" role="list" className={styles.channels} delay={80}>
          {channels.map((c) => {
            const external = c.href.startsWith('http');
            return (
              <li key={c.label}>
                <a
                  href={c.href}
                  className={styles.channel}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer me' } : {})}
                >
                  <Icon name={c.icon} size={22} className={styles.icon} />
                  <span className={styles.label}>{c.label}</span>
                  <span className={styles.value}>{c.value}</span>
                  <Icon name="arrowUpRight" size={22} className={styles.out} />
                  {external && <span className="sr-only">{t(ui.newTab)}</span>}
                </a>
              </li>
            );
          })}
          {isPending(email) && (
            <li className={styles.pendingItem}>
              <Pending value={email} />
            </li>
          )}
        </Reveal>
      </div>
    </section>
  );
}
