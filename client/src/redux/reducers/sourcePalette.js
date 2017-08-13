import { handleActions } from 'redux-actions';
import { receivePalette } from '../actions/sourcePalette';
import { dislikeSourceColor, likeSourceColor } from 'redux/actions/sourceColor';

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
    [dislikeSourceColor]: (state, { payload }) => {
      return { ...state, ...payload };
    },
    [likeSourceColor]: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
  defaultState
);

export default sourcePalette;
