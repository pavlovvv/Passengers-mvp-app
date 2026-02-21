import { useMemo } from 'react';

import styles from './PassengersRoot.module.scss';

import AddPassengerForm from 'features/passengers/components/AddPassengerForm/AddPassengerForm';
import PassengerList from 'features/passengers/components/PassengerList/PassengerList';
import { usePassengers } from 'features/passengers/hooks/usePassengers';
import { Button, ButtonVariant, ErrorNotice } from 'features/passengers/imports.ts';
import { getLoadMoreLabel } from 'features/passengers/utils/getLoadMoreLabel.ts';

export default function PassengersRoot() {
  const {
    items,
    isInitialLoading,
    isLoadingMore,
    error,
    loadMore,
    addPassenger,
    canLoadMore,
  } = usePassengers();

  const loadMoreLabel = useMemo(
    () =>
      getLoadMoreLabel({
        canLoadMore,
        isInitialLoading,
        isLoadingMore,
      }),
    [canLoadMore, isInitialLoading, isLoadingMore],
  );

  const isLoadMoreDisabled = !canLoadMore || isInitialLoading || isLoadingMore;

  return (
    <div className={styles.root}>
      <section className={styles.card}>
        <div className={styles.layout}>
          <div className={styles.listBlock}>
            <header className={styles.header}>
              <h1 className={styles.title}>Passenger list</h1>
            </header>

            <ErrorNotice message={error} />

            <PassengerList
              items={items}
              isInitialLoading={isInitialLoading}
              isLoadingMore={isLoadingMore}
            />

            <div className={styles.footer}>
              <Button
                onClick={loadMore}
                disabled={isLoadMoreDisabled}
                variant={ButtonVariant.SECONDARY}
              >
                {loadMoreLabel}
              </Button>
            </div>
          </div>

          <div className={styles.formBlock}>
            <h1 className={styles.title}>Add new passenger</h1>
            <AddPassengerForm onAdd={addPassenger} />
          </div>
        </div>
      </section>
    </div>
  );
}
