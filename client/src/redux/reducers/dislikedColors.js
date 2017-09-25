// @flow
import { handleActions } from 'redux-actions';
import { addDislikedColor } from '../actions/dislikedColors';

const initialState = [];

const dislikedColors = handleActions(
  {
    [addDislikedColor]: (state, { payload: { color } }) => {
      return [...state, color];
    },
  },
  initialState
);

export default dislikedColors;
