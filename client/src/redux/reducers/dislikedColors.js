import { handleActions } from 'redux-actions';
import { addDislikedColor } from '../actions/dislikedColors';

const initialState = [];

const dislikedColors = handleActions(
  {
    [addDislikedColor]: (state, { payload: { hexCode } }) => {
      return [...state, hexCode];
    },
  },
  initialState
);

export default dislikedColors;
