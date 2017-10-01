// @flow
import { Observable } from 'rxjs/Observable';
import Raven from 'raven-js';
import PaletteAPI from '../../api/PaletteAPI';
import { receivePalette } from '../actions/suggestedColors';
import { addLikedColor } from '../actions/likedColors';
import { REQUEST_PALETTE } from '../actions/ActionTypes';
import type { ColorType } from '../../constants/FlowTypes';

const fetchInitialPalette = (action$, store) => {
  return action$.ofType(REQUEST_PALETTE)
    .switchMap(action => {
      return Observable.fromPromise(PaletteAPI.getRandom())
        .flatMap((response: ColorType[]) => (
          [
            receivePalette(response),
            addLikedColor(response[0])
          ]
        ))
        .catch(err => Observable.of(Raven.captureException(err)))
    });
};

export default fetchInitialPalette;
