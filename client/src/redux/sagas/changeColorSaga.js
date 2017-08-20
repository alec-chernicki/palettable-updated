import { put, takeLatest, select, call } from 'redux-saga/effects';
import { changeLikedColor, changeColor } from 'redux/actions/likedColors';
import likedColorsSelector from 'redux/selectors/likedColorsSelector';
import url from 'utils/url';

function* changeColorGenerator({ payload }) {
  yield put(changeLikedColor(payload));

  const newPalette = yield select(likedColorsSelector);
  yield url.setColors(newPalette);
}

function* changeColorSaga() {
  yield takeLatest(changeColor().type, changeColorGenerator);
}

export default changeColorSaga;
