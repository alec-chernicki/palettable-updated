import { createActions } from 'redux-actions';

export const { dislikeSourceColor, likeSourceColor } = createActions({
  DISLIKE_SOURCE_COLOR: () => ({ disliked: true }),
  LIKE_SOURCE_COLOR: () => ({ liked: true }),
});
