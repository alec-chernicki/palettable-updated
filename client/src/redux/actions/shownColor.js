import { createActions } from 'redux-actions';

export const { changeShownColor } = createActions({
  CHANGE_SHOWN_COLOR: hex => ({ hex }),
});
