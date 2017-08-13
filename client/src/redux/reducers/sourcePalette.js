import { handleActions } from 'redux-actions';
import {
  receivePalette,
  dislikeSourceColor,
  likeSourceColor,
} from 'redux/actions/sourcePalette';

const defaultSourcecolor = {
  hexCode: '',
  liked: false,
  disliked: false,
};

const defaultState = [];

const sourcePalette = handleActions(
  {
    [receivePalette]: (state, { payload }) => {
      return payload.map(color => {
        return {
          ...defaultSourcecolor,
          hexCode: `#${color}`,
        };
      });
    },
    [dislikeSourceColor]: (state, { payload: { hexCode, disliked } }) => {
      return state.map(color => {
        if (color.hexCode !== hexCode) {
          return color;
        }

        return {
          ...color,
          disliked,
        };
      });
    },
    [likeSourceColor]: (state, { payload: { hexCode, liked } }) => {
      return state.map(color => {
        if (color.hexCode !== hexCode) {
          return color;
        }

        return {
          ...color,
          liked,
        };
      });
    },
  },
  defaultState
);

export default sourcePalette;
