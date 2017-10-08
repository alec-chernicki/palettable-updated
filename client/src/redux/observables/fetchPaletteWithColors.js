// @flow
import { Observable } from 'rxjs/Observable';
import Raven from 'raven-js';
import PaletteAPI from '../../api/PaletteAPI';
import { receivePalette } from '../actions/suggestedColors';
import { addLikedColor } from '../actions/likedColors';
import { REQUEST_PALETTE } from '../actions/ActionTypes';
import type { ColorType, ReduxStore } from '../../constants/FlowTypes';
import suggestedColorSelector from '../selectors/suggestedColorSelector';
import likedColorsSelector from '../selectors/likedColorsSelector';
import dislikedColorsSelector from '../selectors/dislikedColorsSelector';


const fetchPaletteWithColors = (
  state: ReduxStore,
) => {
  const likedColors = likedColorsSelector(state);

  return Observable.fromPromise(
    PaletteAPI.getWithColors(
      likedColorsSelector(state),
      dislikedColorsSelector(state)
    ))
    .catch(err => Observable.of(Raven.captureException(err)))
};

export default fetchPaletteWithColors;
