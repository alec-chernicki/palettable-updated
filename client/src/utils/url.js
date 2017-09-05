import { browserHistory } from 'react-router';
import paletteAdapter from 'adapters/paletteAdapter';
import Color from 'color';

const _colorsToString = colors => {
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
  const formattedColors = colorsArray.map(color => `#${color}`);

  return paletteAdapter(formattedColors);
};

const url = {
  setColors(colors) {
    const formattedColors = _colorsToString(colors);
    browserHistory.push(`/${formattedColors}`);
  },
  getColors() {
    return _stringToColors();
  },
};

export default url;
