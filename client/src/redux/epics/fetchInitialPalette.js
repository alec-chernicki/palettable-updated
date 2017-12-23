// @flow
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import Raven from 'raven-js';
import { Observable } from 'rxjs/Observable';
import PaletteAPI from '../../api/PaletteAPI';
import { receivePalette } from '../actions/suggestedColors';
import { addLikedColor } from '../actions/likedColors';
import { REQUEST_PALETTE } from '../actions/ActionTypes';
import { setHasFetchFailed } from '../actions/dataStatus';

const fetchInitialPalette = (action$, store) => {
  return action$.ofType(REQUEST_PALETTE).mergeMap(action => {
    return Observable.fromPromise(PaletteAPI.getRandom())
      .mergeMap((response: ColorType[]) => {
        return [receivePalette(response), addLikedColor(response[0])];
      })
      .catch(err => {
        Raven.captureException(err.data.error);

        return Observable.of(setHasFetchFailed(true));
      });
  });
};

export default fetchInitialPalette;
