import type { ProjectImage } from '../../content/types';
import { useLocale } from '../../hooks/useLocale';
import styles from './Gallery.module.css';

/** Captura principal e, se houver, uma segunda (ex.: celular) sobreposta no canto. */
export function Gallery({ images }: { images: ProjectImage[] }) {
  const { t, locale } = useLocale();
  const [main, second] = images;
  return (
    <figure className={styles.gallery}>
      <div className={`${styles.stage} ${second ? styles.withSecond : ''}`}>
        <img
          className={styles.main}
          src={main.src}
          alt={t(main.alt)}
          width={main.width}
          height={main.height}
          loading="lazy"
          decoding="async"
        />
        {second && (
          <img
            className={styles.second}
            src={second.src}
            alt={t(second.alt)}
            width={second.width}
            height={second.height}
            loading="lazy"
            decoding="async"
          />
        )}
      </div>
      <figcaption className={styles.caption}>
        {locale === 'pt'
          ? 'Capturas com os dados de exemplo do próprio app. Os valores são fictícios.'
          : 'Screenshots use the app’s own sample data. All values are fictional.'}
      </figcaption>
    </figure>
  );
}
