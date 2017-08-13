import { createSelector } from 'reselect';

const sourcePaletteSelector = state => state.sourcePalette;

const suggestedColorSelector = createSelector(
  sourcePaletteSelector,
  sourcePalette => {
    const remainingColors = sourcePalette.filter(
      color => !color.disliked && !color.liked
    );

    return remainingColors[0].hexCode;
  }
);

export default suggestedColorSelector;
