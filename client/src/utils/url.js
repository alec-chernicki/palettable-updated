import { browserHistory } from 'react-router';

const _colorsToString = colors => {
  return colors
    .map(color => {
      return color.replace('#', '');
    })
    .join('-');
};

const _stringToColors = () => {
  const path = window.location.pathname;
  const colorsArray = path.replace('/', '').split('-');

  return colorsArray.map(color => `#${color}`);
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
