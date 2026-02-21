import { memo, type SyntheticEvent, useCallback, useMemo, useState } from 'react';
import styles from './AddPassengerForm.module.scss';
import {
  Button,
  ButtonType,
  ButtonVariant,
  ErrorText,
  TextInput,
} from 'features/passengers/imports.ts';
import { buildPassengerName } from 'features/passengers/utils/validation/buildPassengerName.ts';

interface AddPassengerFormProps {
  onAdd: (name: string) => void;
}

function AddPassengerForm({ onAdd }: AddPassengerFormProps) {
  const [value, setValue] = useState('');
  const [showError, setShowError] = useState(false);

  const validatedName = useMemo(() => buildPassengerName(value), [value]);
  const errorMessage = useMemo(
    () => (showError ? validatedName.error : ''),
    [validatedName.error, showError],
  );

  const handleChange = useCallback(
    (next: string) => {
      setValue(next);
      if (showError) {
        setShowError(false);
      }
    },
    [showError],
  );

  const handleBlur = useCallback(() => {
    setShowError(true);
  }, []);

  const handleSubmit = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();

      setShowError(true);

      const finalComputed = buildPassengerName(value);
      if (finalComputed.error) {
        return;
      }

      onAdd(finalComputed.value);
      setValue('');
      setShowError(false);
    },
    [onAdd, value],
  );

  return (
    <form className={styles.root} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <TextInput
          value={value}
          placeholder="Enter passenger name"
          hasError={!!errorMessage}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <Button
          className={styles.button}
          type={ButtonType.SUBMIT}
          disabled={validatedName.value.length < 1 || !!validatedName.error}
          variant={ButtonVariant.PRIMARY}
        >
          Add
        </Button>
      </div>

      <ErrorText message={errorMessage} />
    </form>
  );
}

export default memo(AddPassengerForm);
