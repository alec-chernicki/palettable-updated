const paletteAdapter = data => {
  if (!Array.isArray(data)) {
    return [];
  }

  return data.map((hexCode, index) => {
    return {
      id: index,
      hexCode: hexCode,
    };
  });
};

export default paletteAdapter;
