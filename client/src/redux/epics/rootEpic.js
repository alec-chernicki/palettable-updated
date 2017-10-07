// @flow
import { combineEpics } from 'redux-observable';
import fetchInitialPalette from './fetchInitialPalette';
import setPaletteUrl from './setPaletteUrl';
import likeColor from './likeColor';

export const rootEpic = combineEpics(
  fetchInitialPalette,
  likeColor,
  setPaletteUrl
);
