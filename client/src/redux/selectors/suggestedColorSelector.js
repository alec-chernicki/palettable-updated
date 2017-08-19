import _ from 'lodash';
import { createSelector } from 'reselect';
import dislikedColorsSelector from 'redux/selectors/dislikedColorsSelector';
import likedColorsSelector from 'redux/selectors/likedColorsSelector';

const suggestedColorsSelector = state => state.suggestedColors;

const suggestedColorSelector = createSelector(
  suggestedColorsSelector,
  dislikedColorsSelector,
  likedColorsSelector,
  (suggestedColors, dislikedColors, likedColors) => {
    debugger;
    const remainingColors = _.difference(suggestedColors, [
      ...dislikedColors,
      ...likedColors,
    ]);
    return remainingColors[0];
  }
);

export default suggestedColorSelector;
