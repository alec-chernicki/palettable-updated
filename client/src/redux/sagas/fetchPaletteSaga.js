import { call, put, takeLatest, select } from 'redux-saga/effects';
import { requestPalette, receivePalette } from 'redux/actions/suggestedColors';
import { addLikedColor, addLikedColors } from 'redux/actions/likedColors';
import {
  setIsFetching,
  setIsStale,
  setHasFetchFailed,
} from 'redux/actions/dataStatus';
import likedColorsSelector from 'redux/selectors/likedColorsSelector';
import PaletteAPI from 'api/PaletteAPI';
import url from 'utils/url';

const isInitialCallSelector = state => likedColorsSelector(state).length === 0;

export function* fetchPaletteGenerator() {
  yield put(setIsFetching(true));

  const isInitialCall = yield select(isInitialCallSelector);
  const paletteFromUrl = url.getColors();

  try {
    const palette = yield call(PaletteAPI.getRandom);

    yield put(receivePalette(palette));
    yield put(setIsFetching(false));
    yield put(setIsStale(false));

    if (isInitialCall) {
      if (paletteFromUrl.length) {
        yield put(addLikedColors(paletteFromUrl));
      } else {
        yield put(addLikedColor(palette[0]));
      }

      const newPalette = yield select(likedColorsSelector);
      yield url.setColors(newPalette);
    }
  } catch (e) {
    yield put(setIsFetching(false));
    yield put(setHasFetchFailed(true));
  }
}

export function* fetchPaletteSaga() {
  yield takeLatest(requestPalette().type, fetchPaletteGenerator);
}
