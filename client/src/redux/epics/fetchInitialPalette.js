// @flow
import { Observable } from 'rxjs/Observable';
import Raven from 'raven-js';
import PaletteAPI from '../../api/PaletteAPI';
import { receivePalette } from '../actions/suggestedColors';
import { addLikedColor } from '../actions/likedColors';
import { REQUEST_PALETTE } from '../actions/ActionTypes';
import type { ColorType, ReduxStore } from '../../constants/FlowTypes';
import suggestedColorSelector from '../selectors/suggestedColorSelector';
import fetchRandomPalette from '../observables/fetchRandomPalette';
import { setHasFetchFailed } from '../actions/dataStatus'
import likedColorsSelector from '../selectors/likedColorsSelector';

const fetchInitialPalette = (action$, store) => {
  return action$.ofType(REQUEST_PALETTE)
    .mergeMap(action => {
      const state: ReduxStore = store.getState();
      const likedColors = likedColorsSelector(state);

      return Observable.fromPromise(PaletteAPI.getRandom())
        .flatMap((response: ColorType[]) => {
          return [
            receivePalette(response),
            addLikedColor(response[0])
          ]
        })
        .catch(err => {
          Raven.captureException(err);
          return Observable.of(setHasFetchFailed(true))
        });
    });
};

export default fetchInitialPalette;
