const urlAdapter = colors => {
  if (!Array.isArray(colors)) {
    return [];
  }

  return colors.map(color => {
    return color.hexCode;
  });
};

export default urlAdapter;
