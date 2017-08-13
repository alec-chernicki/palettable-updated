import { handleActions } from 'redux-actions';
import {
  addShownColor,
  removeShownColor,
  changeShownColor,
} from '../actions/shownPalette';

const defaultShownColor = {
  hexCode: '',
};

const initialState = [];

const shownPalette = handleActions(
  {
    [addShownColor]: (state, { payload: { hexCode } }) => {
      return [
        ...state,
        {
          ...defaultShownColor,
          hexCode,
        },
      ];
    },
    [removeShownColor]: (state, { payload: { hexCode } }) => {
      const shownPalette = state.filter(shownColor => {
        return shownColor.hexCode !== hexCode;
      });

      return shownPalette;
    },
    [changeShownColor]: (state, { payload: { hexCode, newHexCode } }) => {
      const shownPalette = state.map(shownColor => {
        if (shownColor.hexCode !== hexCode) {
          return shownColor;
        }

        return {
          ...shownColor,
          hexCode: newHexCode,
        };
      });

      return shownPalette;
    },
  },
  initialState
);

export default shownPalette;
