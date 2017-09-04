import shortid from 'shortid';

const paletteAdapter = data => {
  if (!Array.isArray(data)) {
    return [];
  }

  return data.map((hexCode, index) => {
    return {
      id: shortid.generate(),
      hexCode: hexCode,
    };
  });
};

export default paletteAdapter;
