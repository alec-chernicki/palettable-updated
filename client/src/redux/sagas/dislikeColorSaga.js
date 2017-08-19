import { put, takeEvery, select } from 'redux-saga/effects';
import { requestPalette, setIsStale } from 'redux/actions/dataStatus';
import { dislikeColor } from 'redux/actions/dislikedColors';
import { changeLikedColor } from 'redux/actions/likedColors';
import suggestedColorSelector from 'redux/selectors/suggestedColorSelector';
// const canAddColorSelector = state => state.shownPalette.length < 5;
// const isSourcePaletteInvalidSelector = state => state.dataStatus.isStale;

function* dislikeColorGenerator({ payload: { hexCode } }) {
  yield put(setIsStale(true));
  yield put(requestPalette());

  const newHexCode = yield select(suggestedColorSelector);

  yield put(changeLikedColor({ oldHexCode: hexCode, newHexCode }));
}

function* dislikeColorSaga() {
  yield takeEvery(dislikeColor().type, dislikeColorGenerator);
}

export default dislikeColorSaga;
