// @flow
import { DISLIKE_COLOR } from '../actions/ActionTypes';
import likedColorsSelector from '../selectors/likedColorsSelector';
import dislikedColorsSelector from '../selectors/dislikedColorsSelector';
import PaletteAPI from '../../api/PaletteAPI';
import type { ReduxStore } from '../reducers/rootReducer';

const dislikeColor = (action$, store) => {
  return action$.ofType(DISLIKE_COLOR)
    .switchMap(() => {
      const state: ReduxStore = store.getState();

      PaletteAPI.getWithColors(
        likedColorsSelector(state),
        dislikedColorsSelector(state)
      );

    });
};

export default dislikeColor;
