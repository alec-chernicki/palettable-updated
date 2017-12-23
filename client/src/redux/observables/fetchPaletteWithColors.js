// @flow
import { Observable } from 'rxjs/Observable';
import PaletteAPI from '../../api/PaletteAPI';
import likedColorsSelector from '../selectors/likedColorsSelector';
import dislikedColorsSelector from '../selectors/dislikedColorsSelector';

const fetchPaletteWithColors = (state: ReduxStoreType) => {
  return Observable.fromPromise(
    PaletteAPI.getWithColors(
      likedColorsSelector(state),
      dislikedColorsSelector(state)
    )
  );
};

export default fetchPaletteWithColors;
