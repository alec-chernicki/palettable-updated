// @flow
declare type ReduxStoreType = {|
  +likedColors: ColorType[] | [],
  +suggestedColors: ColorType[] | [],
  +dislikedColors: ColorType[] | [],
  +dataStatus: {
    +isFetching: boolean,
    +isStale: boolean,
    +hasFetchFailed: boolean,
  },
|};
