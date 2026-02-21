import { memo, useMemo } from 'react';

import styles from './PassengerRow.module.scss';

import { FieldLine } from 'features/passengers/imports.ts';
import type { Passenger } from 'features/passengers/types.ts';
import { toFirstTwoWords, toInitials } from 'features/passengers/utils/name.ts';

interface PassengerRowProps {
  passenger: Passenger;
}

function PassengerRow({ passenger }: PassengerRowProps) {
  const { name, id, phone, photo, email } = passenger;

  const shortName = useMemo(() => toFirstTwoWords(name), [name]);
  const initials = useMemo(() => toInitials(name), [name]);

  return (
    <div className={styles.row}>
      {photo ? (
        <img
          src={photo}
          alt={name}
          className={styles.avatar}
          title={name}
          loading="lazy"
        />
      ) : (
        <div className={styles.initialAvatar} title={name}>
          {initials}
        </div>
      )}

      <div className={styles.info}>
        <h3 className={styles.name}>{shortName}</h3>

        <FieldLine label="id" value={id} />
        <FieldLine label="Email" value={email} hidden={!email} />
        <FieldLine label="Phone" value={phone} hidden={!phone} />
      </div>
    </div>
  );
}

export default memo(PassengerRow);
