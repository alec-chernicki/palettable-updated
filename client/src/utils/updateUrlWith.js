const browserHistory = require('react-router').browserHistory;

const updateUrlWith = (colors) => {
  if (!colors || !colors[0]) {
    return
  }
  const formattedColors = colors.map((colorItem) => {
    if (!colorItem || colorItem.color) {
      return null;
    }
    console.log(colorItem.color);
    return colorItem.color.replace('#', '')
  }).join('-');
  browserHistory.push(`/${formattedColors}`);
}

export default updateUrlWith;
