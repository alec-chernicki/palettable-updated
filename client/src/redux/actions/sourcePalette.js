import { createActions } from 'redux-actions';

export const {
  receivePalette,
  requestPalette,
  dislikeSourceColor,
  likeSourceColor,
} = createActions({
  RECEIVE_PALETTE: sourcePalette => sourcePalette,
  REQUEST_PALETTE: () => {},
  DISLIKE_SOURCE_COLOR: hexCode => ({ hexCode, disliked: true }),
  LIKE_SOURCE_COLOR: hexCode => ({ hexCode, liked: true }),
});
