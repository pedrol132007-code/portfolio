import { ui } from '../../content/ui';
import { useLocale } from '../../hooks/useLocale';
import { Icon } from '../ui/Icon';
import styles from './TododayArchitecture.module.css';

/**
 * O ToDoDay é fechado por convite, então em vez de captura mostramos como ele é montado.
 * Tudo aqui vem do README e do package.json do repositório.
 */
export function TododayArchitecture() {
  const { t } = useLocale();
  const a = ui.architecture;

  return (
    <figure className={styles.panel}>
      <figcaption className={styles.title}>{t(a.title)}</figcaption>

      <div className={styles.layers}>
        <div className={styles.layer}>
          <p className={styles.layerLabel}>{t(a.ui)}</p>
          <ul role="list" className={styles.nodes}>
            <li className={styles.node}>React + TypeScript</li>
            <li className={styles.node}>Vite</li>
            <li className={styles.node}>Tailwind CSS</li>
            <li className={styles.node}>TanStack Query</li>
          </ul>
        </div>

        <div className={styles.layer}>
          <p className={styles.layerLabel}>{t(a.data)}</p>
          <div className={styles.core}>
            <p className={styles.coreName}>Supabase</p>
            <ul role="list" className={styles.nodes}>
              <li className={`${styles.node} ${styles.key}`}>Postgres + RLS</li>
              <li className={styles.node}>Auth</li>
              <li className={styles.node}>Realtime</li>
              <li className={styles.node}>Storage</li>
              <li className={styles.node}>Edge Functions</li>
            </ul>
          </div>
        </div>

        <div className={styles.layer}>
          <p className={styles.layerLabel}>{t(a.delivery)}</p>
          <ul role="list" className={styles.nodes}>
            <li className={styles.node}>{t(a.web)}</li>
            <li className={styles.node}>{t(a.desktop)}</li>
          </ul>
        </div>
      </div>

      <div className={styles.pipeline}>
        <p className={styles.layerLabel}>{t(a.pipeline)}</p>
        <ol role="list" className={styles.steps}>
          {[a.pr, a.ci, a.dev, a.prod].map((step, i, arr) => (
            <li key={i} className={styles.step}>
              <span>{t(step)}</span>
              {i < arr.length - 1 && <Icon name="arrowDown" size={14} className={styles.arrow} />}
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}
