// @flow
import { createActions } from 'redux-actions';

const actions = {
  SET_IS_FETCHING: (isFetching: boolean): { isFetching: boolean } => ({
    isFetching,
  }),
  SET_IS_STALE: (isStale: boolean): { isStale: boolean } => ({ isStale }),
  SET_HAS_FETCH_FAILED: (
    hasFetchFailed: boolean
  ): { hasFetchFailed: boolean } => ({ hasFetchFailed }),
};

export const { setIsFetching, setIsStale, setHasFetchFailed } = createActions(
  actions
);
