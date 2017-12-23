// @flow

const lastColorInPaletteSelector = ({
  likedColors,
}: ReduxStoreType): ColorType => {
  return likedColors[likedColors.length - 1];
};

export default lastColorInPaletteSelector;
