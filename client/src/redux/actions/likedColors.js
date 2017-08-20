import { createActions } from 'redux-actions';

export const {
  addLikedColor,
  removeLikedColor,
  changeLikedColor,
  likeColor,
  changeColor,
} = createActions({
  ADD_LIKED_COLOR: hexCode => ({ hexCode }),
  REMOVE_LIKED_COLOR: hexCode => ({ hexCode }),
  CHANGE_LIKED_COLOR: ({ oldHexCode, newHexCode }) => ({
    oldHexCode,
    newHexCode,
  }),

  // Actions handled by sagas
  LIKE_COLOR: hexCode => ({ hexCode }),
  CHANGE_COLOR: ({ oldHexCode, newHexCode } = {}) => ({
    oldHexCode,
    newHexCode,
  }),
});
