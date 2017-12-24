// @flow
import { Observable } from 'rxjs/Observable';
import PaletteAPI from '../../api/PaletteAPI';
import Raven from 'raven-js';

const fetchRandomPalette = () => {
  return Observable.fromPromise(PaletteAPI.getRandom());
};

export default fetchRandomPalette;
