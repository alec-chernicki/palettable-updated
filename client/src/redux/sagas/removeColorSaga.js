import { put, takeLatest, select } from 'redux-saga/effects';
import { removeLikedColor, removeColor } from 'redux/actions/likedColors';
import likedColorsSelector from 'redux/selectors/likedColorsSelector';
import url from 'utils/url';

function* removeColorGenerator({ payload: { color } }) {
  yield put(removeLikedColor(color));

  const newPalette = yield select(likedColorsSelector);
  yield url.setColors(newPalette);
}

function* removeColorSaga() {
  yield takeLatest(removeColor().type, removeColorGenerator);
}

export default removeColorSaga;
