import { put, takeLatest, select } from 'redux-saga/effects';
import { removeLikedColor, removeColor } from '../actions/likedColors';
import likedColorsSelector from '../selectors/likedColorsSelector';
import { browserHistory } from 'react-router';
import url from '../../utils/url';

function* removeColorGenerator({ payload: { color } }) {
  yield put(removeLikedColor(color));

  const newPalette = yield select(likedColorsSelector);
  yield browserHistory.push(url.stringifyColors(newPalette));
}

function* removeColorSaga() {
  yield takeLatest(removeColor().type, removeColorGenerator);
}

export default removeColorSaga;
