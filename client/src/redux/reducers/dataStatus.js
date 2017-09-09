import { handleActions, combineActions } from 'redux-actions';
import {
  setIsFetching,
  setIsStale,
  setHasFetchFailed,
} from 'redux/actions/dataStatus';

const initialState = {
  isFetching: false,
  isStale: false,
  hasFetchFailed: false,
};

const combinedActions = combineActions(
  setIsFetching,
  setIsStale,
  setHasFetchFailed
);

const dataStatus = handleActions(
  {
    [combinedActions]: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
  initialState
);

export default dataStatus;
