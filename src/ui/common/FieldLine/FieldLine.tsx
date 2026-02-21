import { memo, type ReactNode } from 'react';

import styles from './FieldLine.module.scss';

interface FieldLineProps {
  label: string;
  value: ReactNode;
  hidden?: boolean;
}

function FieldLine({ label, value, hidden }: FieldLineProps) {
  if (hidden) {
    return null;
  }

  return (
    <p className={styles.line}>
      <strong className={styles.label}>{label}:</strong> {value}
    </p>
  );
}

export default memo(FieldLine);
