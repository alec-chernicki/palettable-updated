import { all } from 'redux-saga/effects';
import fetchPaletteSaga from './fetchPaletteSaga';
import likeColorSaga from './likeColorSaga';

function* rootSaga() {
  yield all([fetchPaletteSaga(), likeColorSaga()]);
}

export default rootSaga;
