import { memo, useMemo } from 'react';

import styles from './PassengerList.module.scss';

import PassengerRow from 'features/passengers/components/PassengerRow/PassengerRow';
import PassengerSkeleton from 'features/passengers/components/PassengerSkeleton/PassengerSkeleton';
import { PAGE_SIZE_ITEMS } from 'features/passengers/constants.ts';
import { useAutoScrollOnAppend } from 'features/passengers/hooks/useAutoScrollOnAppend';
import type { Passenger } from 'features/passengers/types';

interface PassengerListProps {
  items: Passenger[];
  isInitialLoading: boolean;
  isLoadingMore: boolean;
}

function PassengerList({ items, isInitialLoading, isLoadingMore }: PassengerListProps) {
  const listRef = useAutoScrollOnAppend<HTMLUListElement>({
    itemsLength: items.length,
    isLoadingMore,
  });

  const skeletons = useMemo(
    () =>
      isInitialLoading || isLoadingMore
        ? Array.from({ length: PAGE_SIZE_ITEMS }, (_, i) => (
            <PassengerSkeleton key={`skeleton_${i}`} />
          ))
        : null,
    [isInitialLoading, isLoadingMore],
  );

  return (
    <ul className={styles.list} ref={listRef}>
      {items.map((passenger) => (
        <li key={passenger.id} className={styles.item}>
          <PassengerRow passenger={passenger} />
        </li>
      ))}

      {skeletons}
    </ul>
  );
}

export default memo(PassengerList);
