// @flow
import type { ReduxStore } from '../reducers/rootReducer';

const likedColorsSelector = (state: ReduxStore) => {
  return state.likedColors;
};

export default likedColorsSelector;
