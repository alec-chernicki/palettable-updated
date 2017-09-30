import { all } from 'redux-saga/effects';
import fetchPaletteSaga from './fetchPaletteSaga';
import likeColorSaga from './likeColorSaga';
import dislikeColorSaga from './dislikeColorSaga';

function* rootSaga() {
  yield all([
    fetchPaletteSaga(),
    likeColorSaga(),
    dislikeColorSaga(),
  ]);
}

export default rootSaga;
