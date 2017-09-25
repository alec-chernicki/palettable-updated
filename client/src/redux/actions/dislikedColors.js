// @flow
import { createActions } from 'redux-actions';

export const { addDislikedColor, dislikeColor } = createActions({
  ADD_DISLIKED_COLOR: color => ({ color }),

  // Actions handled by sagas
  DISLIKE_COLOR: color => ({ color }),
});
