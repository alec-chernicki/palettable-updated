// @flow
import { combineReducers } from 'redux';
import dataStatus from './dataStatus';
import suggestedColors from './suggestedColors';
import likedColors from './likedColors';
import dislikedColors from './dislikedColors';
import colorPicker from './colorPicker';
import type { ColorType } from '../../constants/FlowTypes';

export type ReduxStore = {|
  +likedColors: ColorType[],
  +suggestedColors: ColorType[],
  +dislikedColors: ColorType[],
  +dataStatus: {
    +isFetching: boolean,
    +isStale: boolean,
    +hasFetchFailed: boolean,
  }
|};

export const rootReducer = combineReducers({
  dataStatus,
  likedColors,
  colorPicker,
  dislikedColors,
  suggestedColors,
});
