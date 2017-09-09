import { createActions } from 'redux-actions';

export const { setIsFetching, setIsStale, setHasFetchFailed } = createActions({
  SET_IS_FETCHING: isFetching => ({ isFetching }),
  SET_IS_STALE: isStale => ({ isStale }),
  SET_HAS_FETCH_FAILED: hasFetchFailed => ({ hasFetchFailed }),
});
