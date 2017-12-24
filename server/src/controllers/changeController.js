// @flow
const axios = require('axios');
const _ = require('lodash');
const colornamer = require('color-namer');
const Raven = require('raven');

const formatColors = (colors: string[]): string[] => {
  return colors.map(color => `#${color}`);
};

function getPalettes(params): Promise<ColourLoversColorType[]> {
  return axios.get('/', { params }).then(request => request.data);
}

function getNewColorsFromData(
  palettes,
  dislikedColors,
  currentColors
): string[] {
  const colorsWithoutDisliked: string[] = palettes
    // Flatten data into single array of all returned colors
    .reduce((a, b): string[] => a.concat(b.colors), palettes[0].colors)
    // Remove all colors that have already been disliked or already shown
    .filter(
      (color): boolean =>
        dislikedColors.indexOf(`#${color}`) === -1 &&
        currentColors.indexOf(`#${color}`) === -1
    );
  // Return a palette containing the first 5 in the array
  return _.shuffle(_.uniq(colorsWithoutDisliked)).slice(0, 5);
}

exports.hasExactMatch = (req, res, next) => {
  const currentColors: ColorType[] = req.body.colors;
  const dislikedColors: ColorType[] = req.body.dislikedColors || [];
  // Color to search for is second to last since the last is the one being changed
  const { hexCode }: ColorType = currentColors[currentColors.length - 2];

  getPalettes({ hex: hexCode })
    .then((palettes: ColourLoversColorType[]) => {
      if (!palettes.length) {
        return next();
      }

      const newColors = getNewColorsFromData(
        palettes,
        dislikedColors,
        currentColors
      );

      if (newColors.length < 5) return next();

      return res.json(formatColors(newColors));
    })
    .catch(e => {
      Raven.captureException(e);

      res.status(500);
      res.send({ error: 'Error fetching exact match' });
    });
};

exports.hasClosestHexMatch = (req, res, next) => {
  // Transforms HEX code into a search term then queries the API with term
  const currentColors: ColorType[] = req.body.colors;
  const dislikedColors: ColorType[] = req.body.dislikedColors || [];
  // Color to search for is second to last since the last is the one being changed
  const { hexCode }: ColorType = currentColors[currentColors.length - 2];
  const searchTerm: string = colornamer(hexCode).html[0].hex;

  getPalettes({ hex: searchTerm })
    .then((palettes: ColourLoversColorType[]) => {
      const newColors = getNewColorsFromData(
        palettes,
        dislikedColors,
        currentColors
      );

      if (newColors.length < 5) return next();

      return res.json(formatColors(newColors));
    })
    .catch(e => {
      Raven.captureException(e);

      res.status(500);
      res.send({ error: 'Error fetching closest hex match' });
    });
};
