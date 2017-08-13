import { all } from 'redux-saga/effects';
import fetchPaletteSaga from './fetchPaletteSaga';

function* rootSaga() {
  yield all([fetchPaletteSaga()]);
}

export default rootSaga;
