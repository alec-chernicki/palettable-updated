// @flow
import { Observable } from 'rxjs/Observable';
import { CHANGE_LIKED_COLOR, LIKE_COLOR, REMOVE_LIKED_COLOR } from '../actions/ActionTypes';
import { browserHistory } from 'react-router';
import url from '../../utils/url';
import likedColorsSelector from '../selectors/likedColorsSelector';

const updatableActions = [CHANGE_LIKED_COLOR, LIKE_COLOR, REMOVE_LIKED_COLOR];

const setPaletteUrl = (action$, store) => {
  return action$
    .filter(({ type }) => updatableActions.indexOf(type) !== -1)
    .do(() => {
      const newPalette = likedColorsSelector(store.getState());
      browserHistory.push(url.stringifyColors(newPalette));

      return Observable.empty()
    })
    .ignoreElements();
};

export default setPaletteUrl;
