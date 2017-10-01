// @flow
import type { ReduxStore } from '../reducers/rootReducer';

const dislikedColorsSelector = (state: ReduxStore) => {
  return state.dislikedColors;
};

export default dislikedColorsSelector;
