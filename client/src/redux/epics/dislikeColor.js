// @flow
import { Observable } from 'rxjs/Observable';
import { DISLIKE_COLOR } from '../actions/ActionTypes';
import suggestedColorSelector from '../selectors/suggestedColorSelector';
import { receivePalette } from '../actions/suggestedColors';
import { changeLikedColor } from '../actions/likedColors';
import fetchPaletteWithColors from '../observables/fetchPaletteWithColors';
import { setIsFetching, setHasFetchFailed } from '../actions/dataStatus';
import Raven from 'raven-js';

const dislikeColor = (action$, store) => {
  return action$.ofType(DISLIKE_COLOR).switchMap(({ payload }) => {
    const state: ReduxStoreType = store.getState();
    const suggestedColor = suggestedColorSelector(state);

    if (!suggestedColor) {
      // TODO: This escape hatch will be deprecated,
      // need to figure out a way around this.
      store.dispatch(setIsFetching(true));

      return fetchPaletteWithColors(state)
        .flatMap((response: ColorType[]) => {
          return [
            setIsFetching(false),
            receivePalette(response),
            changeLikedColor({
              color: payload,
              newHexCode: response[0].hexCode,
            }),
          ];
        })
        .catch(err => {
          Raven.captureException(err.data.error);

          return Observable.of(setHasFetchFailed(true));
        });
    }

    return Observable.of(
      changeLikedColor({
        color: payload,
        newHexCode: suggestedColor.hexCode,
      })
    );
  });
};

export default dislikeColor;
