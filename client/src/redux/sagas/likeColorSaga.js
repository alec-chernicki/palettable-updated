import { put, takeLatest, select } from 'redux-saga/effects';
import { addLikedColor, likeColor } from 'redux/actions/likedColors';
import { requestPalette } from 'redux/actions/suggestedColors';
import suggestedColorSelector from 'redux/selectors/suggestedColorSelector';
import likedColorsSelector from 'redux/selectors/likedColorsSelector';
import urlAdapter from 'adapters/urlAdapter';
import url from 'utils/url';

const canAddColorSelector = state => state.likedColors.length < 5;
const isSourcePaletteInvalidSelector = state => state.dataStatus.isStale;

function* likeColorGenerator() {
  const canAddColor = yield select(canAddColorSelector);
  const isSourcePaletteInvalid = yield select(isSourcePaletteInvalidSelector);
  const suggestedColor = yield select(suggestedColorSelector);

  if (isSourcePaletteInvalid) {
    yield put(requestPalette());
    yield put(addLikedColor(suggestedColor));
  }

  if (canAddColor) {
    yield put(addLikedColor(suggestedColor));
  }

  const newPalette = yield select(likedColorsSelector);

  yield url.setColors(newPalette);
}

function* likeColorSaga() {
  yield takeLatest(likeColor().type, likeColorGenerator);
}

export default likeColorSaga;
