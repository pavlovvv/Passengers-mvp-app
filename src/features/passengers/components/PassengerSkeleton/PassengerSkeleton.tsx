import styles from './PassengerSkeleton.module.scss';

export default function PassengerSkeleton() {
  return (
    <div className={styles.row}>
      <div className={styles.avatar} />
      <div className={styles.content}>
        <div className={styles.name} />
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
    </div>
  );
}
