import { all } from 'redux-saga/effects';
import { fetchPaletteSaga } from './fetchPaletteSaga';
import likeColorSaga from './likeColorSaga';
import dislikeColorSaga from './dislikeColorSaga';
import changeColorSaga from './changeColorSaga';

function* rootSaga() {
  yield all([
    fetchPaletteSaga(),
    likeColorSaga(),
    dislikeColorSaga(),
    changeColorSaga(),
  ]);
}

export default rootSaga;
