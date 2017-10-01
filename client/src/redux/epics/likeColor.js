// @flow
import { LIKE_COLOR } from '../actions/ActionTypes';
import suggestedColorSelector from '../selectors/suggestedColorSelector';
import { addLikedColor } from '../actions/likedColors';

const _canAddColorSelector = ({ likedColors, dataStatus }) => {
  return likedColors.length < 5 && dataStatus.isFetching === false;
};

const likeColor = (action$, store) => {
  return action$.ofType(LIKE_COLOR)
    .filter(() => _canAddColorSelector(store.getState()))
    .map(() => addLikedColor(suggestedColorSelector(store.getState())))
};

export default likeColor;
