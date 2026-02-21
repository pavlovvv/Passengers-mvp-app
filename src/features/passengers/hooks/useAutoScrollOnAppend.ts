import { useEffect, useRef } from 'react';

interface useAutoScrollOnAppendParams {
  itemsLength: number;
  isLoadingMore: boolean;
}

export function useAutoScrollOnAppend<T extends HTMLElement>({
  itemsLength,
  isLoadingMore,
}: useAutoScrollOnAppendParams) {
  const ref = useRef<T | null>(null);
  const prevLengthRef = useRef<number>(5);

  useEffect(() => {
    if (!ref.current || itemsLength === 0) {
      return;
    }

    if (itemsLength > prevLengthRef.current || isLoadingMore) {
      ref.current.scrollTo({
        top: ref.current.scrollHeight,
        behavior: 'smooth',
      });
    }

    prevLengthRef.current = itemsLength;
  }, [isLoadingMore, itemsLength]);

  return ref;
}
