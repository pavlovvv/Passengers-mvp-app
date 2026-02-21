import classnames from 'classnames';
import { memo, type ReactNode } from 'react';

import styles from './Button.module.scss';

import { ButtonType, ButtonVariant } from 'ui/common/enums.ts';

interface ButtonProps {
  children: ReactNode;
  type?: ButtonType;
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

function Button({
  children,
  type = ButtonType.BUTTON,
  disabled,
  onClick,
  variant = ButtonVariant.PRIMARY,
  className,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classnames(
        styles.root,
        styles[variant],
        disabled && styles.disabled,
        className,
      )}
    >
      {children}
    </button>
  );
}

export default memo(Button);
