import { call, put, takeLatest, select } from 'redux-saga/effects';
import { requestPalette, receivePalette } from 'redux/actions/suggestedColors';
import { addLikedColor } from 'redux/actions/likedColors';
import { setIsFetching, setIsStale } from 'redux/actions/dataStatus';
import likedColorsSelector from 'redux/selectors/likedColorsSelector';
import PaletteAPI from 'api/PaletteAPI';

const isInitialCallSelector = state => !likedColorsSelector(state).length;

export function* fetchPaletteGenerator(stuff) {
  yield put(setIsFetching(true));

  try {
    const isInitialCall = yield select(isInitialCallSelector);
    const palette = yield call(PaletteAPI.getRandom);

    yield put(receivePalette(palette));
    yield put(setIsFetching(false));
    yield put(setIsStale(false));

    if (isInitialCall) {
      yield put(addLikedColor(palette[0]));
    }
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

export function* fetchPaletteSaga() {
  yield takeLatest(requestPalette().type, fetchPaletteGenerator);
}
