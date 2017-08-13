import { handleActions, combineActions } from 'redux-actions';
import { requestPalette, setIsStale } from '../actions/dataStatus';

const initialState = {
  isFetching: false,
  isStale: false,
};

const combinedActions = combineActions(requestPalette, setIsStale);

const dataStatus = handleActions(
  {
    [combinedActions]: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
  initialState
);

export default dataStatus;
