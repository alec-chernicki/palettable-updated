// @flow
type SetIsFetchingAction = {
  type: 'SET_IS_FETCHING',
  payload: boolean
};
type SetIsStaleAction = {
  type: 'SET_IS_STALE',
  payload: boolean
};
type SetHasFetchFailedAction = {
  type: 'SET_HAS_FETCH_FAILED',
  payload: boolean,
};

export type DataStatusActions =
  | SetIsFetchingAction
  | SetIsStaleAction
  | SetHasFetchFailedAction;

export const setIsFetching = (
  isFetching: boolean
): SetIsFetchingAction => {
  return { type: 'SET_IS_FETCHING', payload: isFetching };
};

export const setIsStale = (
  isStale: boolean
): SetIsStaleAction => {
  return { type: 'SET_IS_STALE', payload: isStale };
};

export const setHasFetchFailed = (
  hasFetchFailed: boolean
): SetHasFetchFailedAction => {
  return { type: 'SET_HAS_FETCH_FAILED', payload: hasFetchFailed };
};
