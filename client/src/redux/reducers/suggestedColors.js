import { handleActions } from 'redux-actions';
import { receivePalette } from '../actions/suggestedColors';

const defaultState = [];

const suggestedColors = handleActions(
  {
    [receivePalette]: (state, { payload }) => {
      return payload;
    },
  },
  defaultState
);

export default suggestedColors;
