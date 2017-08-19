import { createActions } from 'redux-actions';

export const { addDislikedColor, dislikeColor } = createActions({
  ADD_DISLIKED_COLOR: hexCode => ({ hexCode }),

  // Actions handled by sagas
  DISLIKE_COLOR: hexCode => ({ hexCode }),
});
