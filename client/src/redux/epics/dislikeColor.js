// @flow
import { Observable } from 'rxjs/Observable';
import { DISLIKE_COLOR } from '../actions/ActionTypes';
import likedColorsSelector from '../selectors/likedColorsSelector';
import dislikedColorsSelector from '../selectors/dislikedColorsSelector';
import suggestedColorSelector from '../selectors/suggestedColorSelector';
import PaletteAPI from '../../api/PaletteAPI';
import type { ReduxStore } from '../reducers/rootReducer';
import { receivePalette } from '../actions/suggestedColors';
import { changeLikedColor } from '../actions/likedColors';
import Raven from 'raven-js';

const dislikeColor = (action$, store) => {
  return action$.ofType(DISLIKE_COLOR)
    .switchMap(({ payload }) => {
      const state: ReduxStore = store.getState();

      return Observable.fromPromise(PaletteAPI.getWithColors(
        likedColorsSelector(state),
        dislikedColorsSelector(state)
      ))
      .catch(err => Observable.of(Raven.captureException(err)))
      .flatMap((response) => {
        const { hexCode } = suggestedColorSelector(state);

        return [
          receivePalette(response),
          changeLikedColor({ color: payload, newHexCode: hexCode })
        ];
      })
    });
};

export default dislikeColor;
