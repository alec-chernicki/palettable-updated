import { put, takeLatest, select } from 'redux-saga/effects';
import { changeLikedColor, changeColor } from 'redux/actions/likedColors';
import likedColorsSelector from 'redux/selectors/likedColorsSelector';
import { browserHistory } from 'react-router';
import url from 'utils/url';

function* changeColorGenerator({ payload }) {
  const newPalette = yield select(likedColorsSelector);

  yield browserHistory.push(url.stringifyColors(newPalette));
  yield put(changeLikedColor({ payload }));
}

function* changeColorSaga() {
  yield takeLatest(changeColor().type, changeColorGenerator);
}

export default changeColorSaga;
