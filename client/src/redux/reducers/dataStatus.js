// @flow
import type { DataStatusActions } from '../actions/dataStatus';
import {
  SET_HAS_FETCH_FAILED,
  SET_IS_FETCHING,
  SET_IS_STALE,
} from '../actions/ActionTypes';

type State = {
  +isFetching: boolean,
  +isStale: boolean,
  +hasFetchFailed: boolean,
};

const initialState = {
  isFetching: false,
  isStale: false,
  hasFetchFailed: false,
};

const dataStatusReducer = (
  state: State = initialState,
  action: DataStatusActions
): State => {
  switch (action.type) {
    case SET_HAS_FETCH_FAILED:
      return {
        ...state,
        hasFetchFailed: action.payload
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      };
    case SET_IS_STALE:
      return {
        ...state,
        isStale: action.payload
      };
    default:
      return state;
  }
};

export default dataStatusReducer;
