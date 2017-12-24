// @flow
import dislikedColorsSelector from '../selectors/dislikedColorsSelector';
import likedColorsSelector from '../selectors/likedColorsSelector';

const suggestedColorSelector = (state: ReduxStoreType): ColorType | void => {
  const suggestedColors = state.suggestedColors;
  const dislikedColors = dislikedColorsSelector(state);
  const likedColors = likedColorsSelector(state);

  const flattenedDislikedColors = dislikedColors.length
    ? dislikedColors.map(color => color.hexCode)
    : [];
  const flattenedLikedColors = likedColors.length
    ? likedColors.map(color => color.hexCode)
    : [];
  const remainingColors = suggestedColors
    .filter(color => flattenedDislikedColors.indexOf(color.hexCode) === -1)
    .filter(color => flattenedLikedColors.indexOf(color.hexCode) === -1);

  return remainingColors[0];
};

export default suggestedColorSelector;
