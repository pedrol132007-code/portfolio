import { site } from '../../content/profile';
import type { Pending as PendingValue } from '../../content/types';
import { ui } from '../../content/ui';
import { useLocale } from '../../hooks/useLocale';
import styles from './Pending.module.css';

/** Marca o que ainda falta confirmar. Some quando site.showPending é false. */
export function Pending({ value }: { value: PendingValue }) {
  const { t } = useLocale();
  if (!site.showPending) return null;
  return (
    <span className={styles.pending}>
      <span className={styles.label}>{t(ui.pending)}:</span> {t(value.pending)}
    </span>
  );
}
