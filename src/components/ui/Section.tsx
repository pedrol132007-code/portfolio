import type { ReactNode } from 'react';
import { Reveal } from './Reveal';
import styles from './Section.module.css';

type Props = {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
  /** "split": título à esquerda e conteúdo à direita. "stack": título em cima, conteúdo na largura toda. */
  layout?: 'split' | 'stack';
};

export function Section({ id, title, intro, children, layout = 'split' }: Props) {
  const headingId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={headingId} className={styles.section}>
      <div className={`container ${styles[layout]}`}>
        <Reveal className={styles.head}>
          <h2 id={headingId} className={styles.title}>
            {title}
          </h2>
          {intro && <p className={styles.intro}>{intro}</p>}
        </Reveal>
        <div className={styles.body}>{children}</div>
      </div>
    </section>
  );
}
