// @flow
import { Observable } from 'rxjs/Observable';
import PaletteAPI from '../../api/PaletteAPI';
import Raven from 'raven-js';

const fetchRandomPalette = (state: ReduxStoreType) => {
  return Observable.fromPromise(PaletteAPI.getRandom()).catch(err => {
    return Observable.of(Raven.captureException(err.data.error));
  });
};

export default fetchRandomPalette;
