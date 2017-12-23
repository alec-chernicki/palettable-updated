// @flow
const hasFetchFailed = (state: ReduxStoreType) => {
  return state.dataStatus.hasFetchFailed;
};

export default hasFetchFailed;
