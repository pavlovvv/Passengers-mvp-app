import { useCallback, useEffect, useState } from 'react';

import { MAX_LOADS, PAGE_SIZE_ITEMS } from 'features/passengers/constants.ts';
import { fetchPassengers } from 'features/passengers/imports.ts';
import type { Passenger } from 'features/passengers/types';
import { delay } from 'features/passengers/utils/delay.ts';

export function usePassengers() {
  const [items, setItems] = useState<Passenger[]>([]);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loadCount, setLoadCount] = useState(0);

  const loadInitial = useCallback(async () => {
    try {
      setIsInitialLoading(true);
      setError(null);

      const data = await fetchPassengers();

      const sliced = data.slice(0, PAGE_SIZE_ITEMS);

      const withUniqueIds = sliced.map((user) => ({
        ...user,
        id: `${user.id}_${Date.now()}`,
      }));

      setItems(withUniqueIds);
      setLoadCount(1);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setIsInitialLoading(false);
    }
  }, []);

  const loadMore = useCallback(async () => {
    if (loadCount >= MAX_LOADS) {
      return;
    }

    try {
      setIsLoadingMore(true);
      setError(null);

      const [data] = await Promise.all([fetchPassengers(), delay(500)]);
      const sliced = data.slice(0, PAGE_SIZE_ITEMS);

      const withUniqueIds = sliced.map((user) => ({
        ...user,
        id: `${user.id}_${Date.now()}`,
      }));

      setItems((prev) => [...prev, ...withUniqueIds]);
      setLoadCount((prev) => prev + 1);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setIsLoadingMore(false);
    }
  }, [loadCount]);

  const addPassenger = useCallback((name: string) => {
    const newPassenger: Passenger = {
      id: `${Date.now()}`,
      name,
    };

    setItems((prev) => [...prev, newPassenger]);
  }, []);

  useEffect(() => {
    loadInitial();
  }, [loadInitial]);

  return {
    items,
    error,
    loadMore,
    addPassenger,
    canLoadMore: loadCount < MAX_LOADS,
    isInitialLoading,
    isLoadingMore,
  };
}
