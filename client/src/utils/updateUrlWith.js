// @flow
const browserHistory = require('react-router').browserHistory;

const updateUrlWith = (colors: Array<Object>) => {
  if (!colors || !colors[0]) {
    return;
  }

  const formattedColors = colors
    .map(colorItem => {
      if (!colorItem || colorItem.color) {
        return null;
      }

      return colorItem.color.replace('#', '');
    })
    .join('-');

  browserHistory.push(`/${formattedColors}`);
};

export default updateUrlWith;
