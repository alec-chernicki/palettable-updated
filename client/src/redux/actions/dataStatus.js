// @flow
import {
  SET_IS_FETCHING,
  SET_IS_STALE,
  SET_HAS_FETCH_FAILED
} from './ActionTypes'

type SetIsFetchingAction = {
  type: typeof SET_IS_FETCHING,
  payload: boolean
};
type SetIsStaleAction = {
  type: typeof SET_IS_STALE,
  payload: boolean
};
type SetHasFetchFailedAction = {
  type: typeof SET_HAS_FETCH_FAILED,
  payload: boolean,
};

export type DataStatusActions =
  | SetIsFetchingAction
  | SetIsStaleAction
  | SetHasFetchFailedAction;

export const setIsFetching = (
  isFetching: boolean
): SetIsFetchingAction => {
  return { type: SET_IS_FETCHING, payload: isFetching };
};

export const setIsStale = (
  isStale: boolean
): SetIsStaleAction => {
  return { type: SET_IS_STALE, payload: isStale };
};

export const setHasFetchFailed = (
  hasFetchFailed: boolean
): SetHasFetchFailedAction => {
  return { type: SET_HAS_FETCH_FAILED, payload: hasFetchFailed };
};
