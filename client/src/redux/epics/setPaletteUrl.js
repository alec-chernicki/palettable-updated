// @flow
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/ignoreElements';
import 'rxjs/add/observable/empty';
import { Observable } from 'rxjs/Observable';
import {
  CHANGE_LIKED_COLOR,
  ADD_LIKED_COLOR,
  ADD_LIKED_COLORS,
  REMOVE_LIKED_COLOR,
} from '../actions/ActionTypes';
import { browserHistory } from 'react-router';
import url from '../../utils/url';
import likedColorsSelector from '../selectors/likedColorsSelector';

const updatableActions = [
  CHANGE_LIKED_COLOR,
  ADD_LIKED_COLOR,
  ADD_LIKED_COLORS,
  REMOVE_LIKED_COLOR,
];

const setPaletteUrl = (action$, store) => {
  return action$
    .filter(({ type }) => updatableActions.indexOf(type) !== -1)
    .do(() => {
      const newPalette = likedColorsSelector(store.getState());
      browserHistory.push(url.stringifyColors(newPalette));

      return Observable.empty();
    })
    .ignoreElements();
};

export default setPaletteUrl;
