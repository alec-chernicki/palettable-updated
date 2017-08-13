import { put, takeLatest, select } from 'redux-saga/effects';
import { addShownColor } from 'redux/actions/shownPalette';
import { requestPalette } from 'redux/actions/dataStatus';
import suggestedColorSelector from 'redux/selectors/suggestedColorSelector';
import { likeSourceColor } from 'redux/actions/sourcePalette';

const canAddColorSelector = state => state.shownPalette.length < 5;
const isSourcePaletteInvalidSelector = state => state.dataStatus.isStale;

function* likeColor(stuff) {
  const canAddColor = yield select(canAddColorSelector);
  const isSourcePaletteInvalid = yield select(isSourcePaletteInvalidSelector);
  const suggestedColor = yield select(suggestedColorSelector);

  console.log(suggestedColor);

  if (isSourcePaletteInvalid) {
    yield put(requestPalette());
    yield put(addShownColor(suggestedColor));
  }

  if (canAddColor) {
    yield put(addShownColor(suggestedColor));
  }
}

function* likeColorSaga() {
  yield takeLatest(likeSourceColor().type, likeColor);
}

export default likeColorSaga;
