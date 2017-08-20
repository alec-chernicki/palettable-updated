import { createActions } from 'redux-actions';

export const { setIsFetching, setIsStale } = createActions({
  SET_IS_FETCHING: isFetching => ({ isFetching }),
  SET_IS_STALE: isStale => ({ isStale }),
});
