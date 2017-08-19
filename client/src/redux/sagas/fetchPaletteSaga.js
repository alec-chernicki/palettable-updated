import { call, put, takeLatest, select } from 'redux-saga/effects';
import { receivePalette } from 'redux/actions/suggestedColors';
import { addLikedColor } from 'redux/actions/likedColors';
import { requestPalette, setIsStale } from 'redux/actions/dataStatus';
import likedColorsSelector from 'redux/selectors/likedColorsSelector';
import PaletteAPI from 'api/PaletteAPI';

const isInitialCallSelector = state => !likedColorsSelector(state).length;

function* fetchPalette(stuff) {
  try {
    const isInitialCall = yield select(isInitialCallSelector);
    console.log(isInitialCall);
    const palette = yield call(PaletteAPI.getRandom);

    yield put(receivePalette(palette));
    yield put(setIsStale(false));

    if (isInitialCall) {
      yield put(addLikedColor(palette[0]));
    }
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* fetchPaletteSaga() {
  yield takeLatest(requestPalette().type, fetchPalette);
}

export default fetchPaletteSaga;
