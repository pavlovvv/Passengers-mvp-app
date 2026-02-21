import classnames from 'classnames';
import { memo } from 'react';

import styles from './TextInput.module.scss';

interface TextInputProps {
  value: string;
  placeholder?: string;
  hasError?: boolean;
  onChange: (next: string) => void;
  onBlur?: () => void;
  className?: string;
  inputClassName?: string;
  name?: string;
  autoComplete?: string;
}

function TextInput({
  value,
  placeholder,
  hasError,
  onChange,
  onBlur,
  className,
  inputClassName,
  name,
  autoComplete,
}: TextInputProps) {
  return (
    <input
      className={classnames(
        styles.input,
        hasError && styles.inputError,
        inputClassName,
        className,
      )}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      aria-invalid={!!hasError}
      name={name}
      autoComplete={autoComplete}
    />
  );
}

export default memo(TextInput);
