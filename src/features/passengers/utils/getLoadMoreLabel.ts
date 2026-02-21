interface getLoadMoreLabelParams {
  canLoadMore: boolean;
  isInitialLoading: boolean;
  isLoadingMore: boolean;
}

export function getLoadMoreLabel({
  canLoadMore,
  isInitialLoading,
  isLoadingMore,
}: getLoadMoreLabelParams): string {
  if (isInitialLoading || isLoadingMore) {
    return 'Loading...';
  }
  if (!canLoadMore) {
    return 'Limit reached';
  }
  return 'Show more';
}
