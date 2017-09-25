// @flow
const hasFetchFailed = (state): boolean => {
  return state.dataStatus.hasFetchFailed;
};

export default hasFetchFailed;
