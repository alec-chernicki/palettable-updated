import { handleActions, combineActions } from 'redux-actions';
import { setIsFetching, setIsStale } from 'redux/actions/dataStatus';

const initialState = {
  isFetching: false,
  isStale: false,
};

const combinedActions = combineActions(setIsFetching, setIsStale);

const dataStatus = handleActions(
  {
    [combinedActions]: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
  initialState
);

export default dataStatus;
