import axios from 'axios';

const RANDOM_ENDPOINT = '/api/random';
const CHANGE_ENDPOINT = '/api/change';

const PaletteAPI = {
  getWithColors(allColors, dislikedColors) {
    const options = {
      params: {
        colors: allColors,
        dislikedColors,
      },
    };

    return axios.get(CHANGE_ENDPOINT, options);
  },

  getRandom() {
    return axios.get(RANDOM_ENDPOINT).then(({ data }) => data);
  },
};

export default PaletteAPI;
