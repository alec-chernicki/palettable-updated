import { createSelector } from 'reselect';

const sourcePaletteSelector = state => state.sourcePalette;

const suggestedColorSelector = createSelector(
  sourcePaletteSelector,
  sourcePalette =>
    sourcePalette.filter(color => !color.disliked && !color.liked)
);

export default suggestedColorSelector;
