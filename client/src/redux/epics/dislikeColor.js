// @flow
import { Observable } from 'rxjs/Observable';
import { DISLIKE_COLOR } from '../actions/ActionTypes';
import likedColorsSelector from '../selectors/likedColorsSelector';
import dislikedColorsSelector from '../selectors/dislikedColorsSelector';
import PaletteAPI from '../../api/PaletteAPI';
import type { ReduxStore } from '../reducers/rootReducer';
import { receivePalette } from '../actions/suggestedColors';
import Raven from 'raven-js';

const dislikeColor = (action$, store) => {
  return action$.ofType(DISLIKE_COLOR)
    .switchMap(() => {
      const state: ReduxStore = store.getState();

      Observable.fromPromise(PaletteAPI.getWithColors(
        likedColorsSelector(state),
        dislikedColorsSelector(state)
      ))
      .catch(err => Observable.of(Raven.captureException(err)))
      .map((response) => receivePalette(response))
    });
};

export default dislikeColor;
