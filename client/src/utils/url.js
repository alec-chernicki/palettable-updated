import { browserHistory } from 'react-router';
import paletteAdapter from 'adapters/paletteAdapter';

const _colorsToString = colors => {
  return colors
    .map(color => {
      return color.hexCode.replace('#', '');
    })
    .join('-');
};

const _stringToColors = () => {
  const path = window.location.pathname;
  const colorsArray = path.replace('/', '').split('-');

  return colorsArray.map(paletteAdapter);
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
