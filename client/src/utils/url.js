// @flow
import paletteAdapter from 'adapters/paletteAdapter';
import isHex from 'utils/isHex';
import Color from 'color';

const _colorsToString = (colors: Array<Object>): string => {
  return colors
    .map(colorItem => {
      const formattedColor = Color(colorItem.hexCode).hex();

      return formattedColor.replace('#', '');
    })
    .join('-');
};

const _stringToColors = () => {
  const path = window.location.pathname.replace('/', '');

  if (!path) {
    return [];
  }

  const colorsArray = path.split('-');
  const formattedColors = colorsArray.map(color => `#${color}`).filter(isHex);

  return paletteAdapter(formattedColors);
};

const url = {
  stringifyColors(colors: Array<Object>): string {
    return _colorsToString(colors);
  },
  parseColors() {
    return _stringToColors();
  },
};

export default url;
