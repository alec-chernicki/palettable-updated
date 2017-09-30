// @flow
import { combineReducers } from 'redux';
import dataStatus from './dataStatus';
import suggestedColors from './suggestedColors';
import likedColorsReducer, { likedColorsEpic } from './likedColors';
import dislikedColors from './dislikedColors';
import { combineEpics } from 'redux-observable';

export const rootEpic = combineEpics(
  likedColorsEpic,
);

export const rootReducer = combineReducers({
  dataStatus,
  likedColorsReducer,
  dislikedColors,
  suggestedColors,
});
