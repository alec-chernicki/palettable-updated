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
import { browserHistory } from 'react-router';
import Raven from 'raven-js';

const isInitialCallSelector = state => likedColorsSelector(state).length === 0;

export function* fetchPaletteGenerator() {
  yield put(setIsFetching(true));

  const isInitialCall = yield select(isInitialCallSelector);
  const paletteFromUrl = url.parseColors();

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
      yield browserHistory.push(url.stringifyColors(newPalette));
    }
  } catch (e) {
    debugger;
    Raven.captureException(e);
    yield put(setIsFetching(false));
    yield put(setHasFetchFailed(true));
  }
}

export function* fetchPaletteSaga() {
  yield takeLatest(requestPalette().type, fetchPaletteGenerator);
}
