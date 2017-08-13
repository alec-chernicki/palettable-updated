import { createActions } from 'redux-actions';

export const { addColor, removeColor } = createActions({
  ADD_COLOR: color => ({ color }),
  REMOVE_COLOR: color => ({ color }),
});
