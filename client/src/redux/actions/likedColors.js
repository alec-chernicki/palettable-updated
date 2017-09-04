import { createActions } from 'redux-actions';

export const {
  addLikedColor,
  removeLikedColor,
  changeLikedColor,
  removeColor,
  likeColor,
  changeColor,
} = createActions({
  ADD_LIKED_COLOR: color => ({ color }),
  REMOVE_LIKED_COLOR: color => ({ color }),
  CHANGE_LIKED_COLOR: ({ payload: { color, newHexCode } }) => ({
    color,
    newHexCode,
  }),

  // Actions handled by sagas
  REMOVE_COLOR: color => ({ color }),
  LIKE_COLOR: color => ({ color }),
  CHANGE_COLOR: ({ color, newHexCode } = {}) => ({
    color,
    newHexCode,
  }),
});
