import { memo } from 'react';

import styles from './ErrorNotice.module.scss';

interface ErrorNoticeProps {
  message: string | null;
}

function ErrorNotice({ message }: ErrorNoticeProps) {
  if (!message) {
    return null;
  }

  return <div className={styles.error}>Error: {message}</div>;
}

export default memo(ErrorNotice);
