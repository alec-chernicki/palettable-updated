import { handleActions } from 'redux-actions';
import { receivePalette } from 'redux/actions/suggestedColors';

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
