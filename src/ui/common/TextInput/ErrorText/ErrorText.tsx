import { memo } from 'react';

import styles from './ErrorText.module.scss';

interface ErrorTextProps {
  message?: string;
  className?: string;
}

function ErrorText({ message, className }: ErrorTextProps) {
  if (!message) {
    return null;
  }

  return (
    <div className={`${styles.error} ${className ?? ''}`} role="alert">
      {message}
    </div>
  );
}

export default memo(ErrorText);
