// @flow
import type { ReduxStore } from '../reducers/rootReducer';

const hasFetchFailed = (state: ReduxStore) => {
  return state.dataStatus.hasFetchFailed;
};

export default hasFetchFailed;
