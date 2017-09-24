import { put, takeLatest, select } from 'redux-saga/effects';
import { removeLikedColor, removeColor } from 'redux/actions/likedColors';
import likedColorsSelector from 'redux/selectors/likedColorsSelector';
import { browserHistory } from 'react-router';
import url from 'utils/url';

function* removeColorGenerator({ payload: { color } }) {
  yield put(removeLikedColor(color));

  const newPalette = yield select(likedColorsSelector);
  yield browserHistory.push(url.stringifyColors(newPalette));
}

function* removeColorSaga() {
  yield takeLatest(removeColor().type, removeColorGenerator);
}

export default removeColorSaga;
