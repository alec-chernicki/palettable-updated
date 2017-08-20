import axios from 'axios';

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

    return axios.get(CHANGE_ENDPOINT, options).then(({ data }) => data);
  },

  getRandom() {
    return axios.get(RANDOM_ENDPOINT).then(({ data }) => data);
  },
};

export default PaletteAPI;
