import { createSelector } from 'reselect';
import dislikedColorsSelector from 'redux/selectors/dislikedColorsSelector';
import likedColorsSelector from 'redux/selectors/likedColorsSelector';

const suggestedColorsSelector = state => state.suggestedColors;

const suggestedColorSelector = createSelector(
  suggestedColorsSelector,
  dislikedColorsSelector,
  likedColorsSelector,
  (suggestedColors, dislikedColors, likedColors) => {
    const flattenedDislikedColors = dislikedColors.map(color => color.hexCode);
    const flattenedLikedColors = likedColors.map(color => color.hexCode);
    const remainingColors = suggestedColors
      .filter(color => flattenedDislikedColors.indexOf(color.hexCode) === -1)
      .filter(color => flattenedLikedColors.indexOf(color.hexCode) === -1);

    return remainingColors[0];
  }
);

export default suggestedColorSelector;
