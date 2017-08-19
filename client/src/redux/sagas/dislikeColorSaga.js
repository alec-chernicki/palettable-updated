import { put, takeLatest, select } from 'redux-saga/effects';
import { addShownColor } from 'redux/actions/shownPalette';
import { requestPalette, setIsStale } from 'redux/actions/dataStatus';
import suggestedColorSelector from 'redux/selectors/suggestedColorSelector';
import { addLikedColor } from 'redux/actions/suggestedColors';

const canAddColorSelector = state => state.shownPalette.length < 5;
const isSourcePaletteInvalidSelector = state => state.dataStatus.isStale;

function* dislikeColor(stuff) {
  const canAddColor = yield select(canAddColorSelector);
  const isSourcePaletteInvalid = yield select(isSourcePaletteInvalidSelector);
  const suggestedColor = yield select(suggestedColorSelector);

  yield put(setIsStale());
  yield put(requestPalette());
  yield put(addShownColor(suggestedColor));
}

function* dislikeColorSaga() {
  yield takeLatest(addLikedColor().type, dislikeColor);
}

export default dislikeColorSaga;
