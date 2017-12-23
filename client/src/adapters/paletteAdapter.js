// @flow
import shortid from 'shortid';

const paletteAdapter = (data: Array<string>): ColorType[] => {
  const palette = data.map((hexCode, index) => {
    return {
      id: shortid.generate(),
      hexCode: hexCode,
    };
  });

  return palette.slice(0, 5);
};

export default paletteAdapter;
