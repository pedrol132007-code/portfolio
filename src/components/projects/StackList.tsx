import styles from './StackList.module.css';

export function StackList({ items }: { items: string[] }) {
  return (
    <ul role="list" className={styles.stack}>
      {items.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ul>
  );
}
