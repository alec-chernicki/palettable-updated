import { call, put, takeLatest, select } from 'redux-saga/effects';
import { requestPalette, receivePalette } from 'redux/actions/suggestedColors';
import { addLikedColor } from 'redux/actions/likedColors';
import { setIsFetching, setIsStale } from 'redux/actions/dataStatus';
import likedColorsSelector from 'redux/selectors/likedColorsSelector';
import PaletteAPI from 'api/PaletteAPI';
import url from 'utils/url';

const isInitialCallSelector = state => likedColorsSelector(state).length === 0;

export function* fetchPaletteGenerator() {
  yield put(setIsFetching(true));

  const isInitialCall = yield select(isInitialCallSelector);
  const paletteFromUrl = url.getColors().reverse();

  try {
    const palette = yield call(PaletteAPI.getRandom);

    yield put(receivePalette(palette));
    yield put(setIsFetching(false));
    yield put(setIsStale(false));

    if (isInitialCall) {
      if (paletteFromUrl.length) {
        for (let i = paletteFromUrl.length; i >= 1; i--) {
          yield put(addLikedColor(paletteFromUrl[i - 1]));
        }
      } else {
        yield put(addLikedColor(palette[0]));
        const newPalette = yield select(likedColorsSelector);
        yield url.setColors(newPalette);
      }
    }
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

export function* fetchPaletteSaga() {
  yield takeLatest(requestPalette().type, fetchPaletteGenerator);
}
