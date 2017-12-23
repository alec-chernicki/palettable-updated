// @flow
const axios = require('axios');
const Raven = require('raven');

const formatColors = colors => {
  return colors.map(color => `#${color}`);
};

const fetchRandomPalette = (): Promise<string[]> =>
  axios.get('/random').then((res: { data: ColourLoversColorType[] }) => {
    const colors = res.data[0].colors;

    // Continue calling API until palette that's 5 colors long returns.
    // This is because the API doesn't allow you to search by
    // palette length and doesn't standardize this on their platform.
    if (colors.length < 5) {
      return fetchRandomPalette();
    }

    return colors;
  });

exports.getRandom = (req, res, next) => {
  fetchRandomPalette()
    .then(formatColors)
    .then(colors => res.json(colors))
    .catch(e => {
      Raven.captureException(e);

      res.status(500);
      res.send({ error: 'Error fetching random palette' });
    });
};
