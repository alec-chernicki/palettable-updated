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
      const likedColors = state.filter(likedColor => {
        return likedColor !== hexCode;
      });

      return likedColors;
    },
    [changeLikedColor]: (state, { payload: { hexCode, newHexCode } }) => {
      return state.map(likedColor => {
        if (likedColor !== hexCode) {
          return likedColor;
        }

        return likedColor;
      });
    },
  },
  initialState
);

export default likedColors;
