import { call, put, takeLatest } from 'redux-saga/effects';
import { receivePalette } from 'redux/actions/sourcePalette';
import { addShownColor } from 'redux/actions/shownPalette';
import { requestPalette } from 'redux/actions/dataStatus';
import PaletteAPI from 'api/PaletteAPI';

function* fetchPalette(stuff) {
  try {
    const palette = yield call(PaletteAPI.getRandom);
    yield put(receivePalette(palette));
    yield put(addShownColor(palette[0]));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* fetchPaletteSaga() {
  yield takeLatest(requestPalette().type, fetchPalette);
}

export default fetchPaletteSaga;
