import { handleActions } from 'redux-actions';
import {
  addLikedColor,
  removeLikedColor,
  changeLikedColor,
} from '../actions/likedColors';

const initialState = [];

const likedColors = handleActions(
  {
    [addLikedColor]: (state, { payload: { hexCode } }) => {
      return [...state, hexCode];
    },
    [removeLikedColor]: (state, { payload: { hexCode } }) => {
      return state.filter(likedColor => {
        return likedColor !== hexCode;
      });
    },
    [changeLikedColor]: (state, { payload: { oldHexCode, newHexCode } }) => {
      return state.map(likedColor => {
        if (likedColor !== oldHexCode) {
          return likedColor;
        }

        return newHexCode;
      });
    },
  },
  initialState
);

export default likedColors;
