const _isHex = color => {
  const regex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
  const colorText = /#/.test(color) ? color : `#${color}`;

  return regex.test(colorText);
};

exports.getHome = (req, res) => {
  const paletteParams = req.params.palette;
  const DEFAULT_PALETTE = '598987-678F8D-77A88D-FFD000-FF6670';

  if (paletteParams) {
    const hasDash = paletteParams.indexOf('-') !== -1;
    const isCorrectFormat =
      paletteParams.split('-').filter(color => _isHex(color)).length > 1;

    if (hasDash && isCorrectFormat) {
      res.render('index', {
        palette: paletteParams,
      });
    } else {
      res.render('index', {
        palette: DEFAULT_PALETTE,
      });
    }
  } else {
    res.render('index', {
      palette: DEFAULT_PALETTE,
    });
  }
};
