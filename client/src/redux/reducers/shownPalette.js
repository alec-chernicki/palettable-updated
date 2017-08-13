import { handleActions } from 'redux-actions';
import { addColor, removeColor } from '../actions/shownPalette';

const initialState = [];

const shownPalette = handleActions(
  {
    [addColor]: (state, { payload: { color } }) => {
      return {
        ...state,
        shownPalette: [...state.shownPalette, color],
      };
    },
    [removeColor]: (state, { payload: { color } }) => {
      const shownPalette = state.shownPalette.filter(shownColor => {
        return shownColor.hex !== color.hex;
      });

      return {
        ...state,
        shownPalette,
      };
    },
  },
  initialState
);

export default shownPalette;
