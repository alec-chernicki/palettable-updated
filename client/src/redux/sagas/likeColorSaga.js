import { put, takeLatest, select } from 'redux-saga/effects';
import { addLikedColor, likeColor } from 'redux/actions/likedColors';
import { requestPalette } from 'redux/actions/dataStatus';
import suggestedColorSelector from 'redux/selectors/suggestedColorSelector';

const canAddColorSelector = state => state.likedColors.length < 5;
const isSourcePaletteInvalidSelector = state => state.dataStatus.isStale;

function* likeColorGenerator(stuff) {
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
}

function* likeColorSaga() {
  yield takeLatest(likeColor().type, likeColorGenerator);
}

export default likeColorSaga;
