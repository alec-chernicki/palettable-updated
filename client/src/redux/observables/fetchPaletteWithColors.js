// @flow
import { Observable } from 'rxjs/Observable';
import Raven from 'raven-js';
import PaletteAPI from '../../api/PaletteAPI';
import type { ReduxStore } from '../../constants/FlowTypes';
import likedColorsSelector from '../selectors/likedColorsSelector';
import dislikedColorsSelector from '../selectors/dislikedColorsSelector';


const fetchPaletteWithColors = (
  state: ReduxStore,
) => {

  return Observable.fromPromise(
    PaletteAPI.getWithColors(
      likedColorsSelector(state),
      dislikedColorsSelector(state)
    ))
    .catch(err => Observable.of(Raven.captureException(err)))
};

export default fetchPaletteWithColors;
