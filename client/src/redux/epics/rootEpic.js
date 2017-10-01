// @flow
import { combineEpics } from 'redux-observable';
import fetchInitialPalette from './fetchInitialPalette';
import likeColor from './likeColor';

export const rootEpic = combineEpics(
  fetchInitialPalette,
  likeColor
);
