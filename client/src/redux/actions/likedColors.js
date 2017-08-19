import { createActions } from 'redux-actions';

export const {
  addLikedColor,
  removeLikedColor,
  changeLikedColor,
  likeColor,
} = createActions({
  ADD_LIKED_COLOR: hexCode => ({ hexCode }),
  REMOVE_LIKED_COLOR: hexCode => ({ hexCode }),
  CHANGE_LIKED_COLOR: hexCode => ({ hexCode }),

  // Actions handled by sagas
  LIKE_COLOR: hexCode => ({ hexCode }),
});
