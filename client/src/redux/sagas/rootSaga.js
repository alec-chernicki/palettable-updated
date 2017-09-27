import { all } from 'redux-saga/effects';
import fetchPaletteSaga from './fetchPaletteSaga';
import likeColorSaga from './likeColorSaga';
import dislikeColorSaga from './dislikeColorSaga';
import changeColorSaga from './changeColorSaga';
import removeColorSaga from './removeColorSaga';

function* rootSaga() {
  yield all([
    fetchPaletteSaga(),
    likeColorSaga(),
    dislikeColorSaga(),
    // changeColorSaga(),
    removeColorSaga(),
  ]);
}

export default rootSaga;
