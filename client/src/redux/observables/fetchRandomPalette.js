// @flow
import { Observable } from 'rxjs/Observable';
import PaletteAPI from '../../api/PaletteAPI';
import type { ReduxStore } from '../../constants/FlowTypes';

const fetchRandomPalette = (
  state: ReduxStore,
) => {
  return Observable.fromPromise(PaletteAPI.getRandom())
};

export default fetchRandomPalette;
