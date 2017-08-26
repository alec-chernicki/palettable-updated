import { createActions } from 'redux-actions';

export const {
  addLikedColor,
  removeLikedColor,
  changeLikedColor,
  removeColor,
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
  REMOVE_COLOR: hexCode => ({ hexCode }),
  LIKE_COLOR: hexCode => ({ hexCode }),
  CHANGE_COLOR: ({ oldHexCode, newHexCode } = {}) => ({
    oldHexCode,
    newHexCode,
  }),
});
