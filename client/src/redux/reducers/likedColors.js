import { handleActions } from 'redux-actions';
import shortId from 'shortid';
import {
  setIsColorPickerActive,
  addLikedColor,
  addLikedColors,
  removeLikedColor,
  changeLikedColor,
} from '../actions/likedColors';

const defaultLikedColor = {
  isColorPickerActive: false,
};
const initialState = [];

const likedColors = handleActions(
  {
    [setIsColorPickerActive]: (
      state,
      { payload: { color, isColorPickerActive = false } }
    ) => {
      return state.map(likedColor => {
        if (likedColor.id !== color.id) {
          return {
            ...likedColor,
            isColorPickerActive: false,
          };
        }

        return {
          ...likedColor,
          isColorPickerActive,
        };
      });
    },

    [addLikedColor]: (state, { payload: { color } }) => {
      return [
        ...state,
        {
          ...defaultLikedColor,
          ...color,
          id: shortId.generate(),
        },
      ];
    },

    [addLikedColors]: (state, { payload: { colors } }) => {
      const colorsWithDefaults = colors.map(color => {
        return {
          ...defaultLikedColor,
          ...color,
          id: shortId.generate(),
        };
      });

      return [...state, ...colorsWithDefaults];
    },

    [removeLikedColor]: (state, { payload: { color } }) => {
      return state.filter(likedColor => {
        return likedColor.id !== color.id;
      });
    },

    [changeLikedColor]: (state, { payload: { color, newHexCode } }) => {
      return state.map(likedColor => {
        if (likedColor.id !== color.id) {
          return likedColor;
        }

        return {
          ...likedColor,
          hexCode: newHexCode,
        };
      });
    },
  },
  initialState
);

export default likedColors;
