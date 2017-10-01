import { all } from 'redux-saga/effects';
import dislikeColorSaga from './dislikeColorSaga';

function* rootSaga() {
  yield all([
    dislikeColorSaga(),
  ]);
}

export default rootSaga;
