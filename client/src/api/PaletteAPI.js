import axios from 'axios';
import paletteAdapter from 'adapters/paletteAdapter';

const RANDOM_ENDPOINT = '/api/random';
const CHANGE_ENDPOINT = '/api/change';

const PaletteAPI = {
  getWithColors(likedColors, dislikedColors) {
    const options = {
      params: {
        colors: likedColors,
        dislikedColors,
      },
    };

    return axios
      .get(CHANGE_ENDPOINT, options)
      .then(({ data }) => data)
      .then(paletteAdapter);
  },

  getRandom() {
    return axios
      .get(RANDOM_ENDPOINT)
      .then(({ data }) => data)
      .then(paletteAdapter);
  },
};

export default PaletteAPI;
