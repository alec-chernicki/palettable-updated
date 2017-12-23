// @flow

const getIsFetchingSelector = (state: ReduxStoreType): boolean => {
  return !state.suggestedColors.length;
};

export default getIsFetchingSelector;
