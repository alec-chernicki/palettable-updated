import { createActions } from 'redux-actions';

export const {
  addShownColor,
  removeShownColor,
  changeShownColor,
} = createActions({
  ADD_SHOWN_COLOR: hexCode => ({ hexCode: `#${hexCode}` }),
  REMOVE_SHOWN_COLOR: hexCode => ({ hexCode: `#${hexCode}` }),
  CHANGE_SHOWN_COLOR: hexCode => ({ hexCode: `#${hexCode}` }),
});
