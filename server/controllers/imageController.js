// @flow
const Canvas = require('canvas');
const isHex = require('../utils/isHex').default;
const colorInterpreter = require('color');

exports.drawImage = (req, res) => {
  const palette = req.params.palette;
  if (!palette || palette.indexOf('-') === -1) {
    res.status(404);
    return res.end('Error');
  }

  const formattedPalette = palette.split('-').filter((color) => isHex(color));
  if (formattedPalette.length <= 1) {
    res.status(404);
    return res.end('Error');
  }

  res.setHeader('Content-Type', 'image/png');
  res.setHeader('Cache-Control', 'public, max-age=31536000');
  res.setHeader('Expires', new Date(0));
  res.setHeader('Last-Modified', new Date(0));

  const DPI_FACTOR = 2;

  const CANVAS_WIDTH = 900 * DPI_FACTOR;
  const CANVAS_HEIGHT = 600 * DPI_FACTOR;

  const IMAGE_WIDTH = CANVAS_WIDTH ;
  const IMAGE_HEIGHT = CANVAS_HEIGHT ;
  const IMAGE_BAR_HEIGHT = (CANVAS_HEIGHT / 10);

  const canvas = new Canvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  console.log(canvas.webkitBackingStorePixelRatio)

  const ctx = canvas.getContext('2d');
  ctx.scale(1, 1);

  const stream = canvas.createPNGStream();

  stream.on('data', (chunk) => {
    res.write(chunk);
  });
  stream.on('end', () => {
    res.end();
  });


  // Iterates over each color and draws a vertical rectangle
  for (let i = 0; i < formattedPalette.length; i++) {
    const currentXCoordinate = IMAGE_WIDTH / (formattedPalette.length);
    ctx.fillStyle = `#${formattedPalette[i]}`;
    ctx.fillRect((i * currentXCoordinate), 0, currentXCoordinate, IMAGE_HEIGHT);
  }

  // Draws top white bar
  ctx.fillStyle = '#FFF';
  ctx.fillRect(0, 0, IMAGE_WIDTH, IMAGE_BAR_HEIGHT)

  // Draws title
  const FONT_HEIGHT = 22 * DPI_FACTOR;

  ctx.font = `bold ${FONT_HEIGHT}px Arial`;
  ctx.fillStyle = '#333';
  ctx.fillText('PALETTABLE', IMAGE_WIDTH / 50, (IMAGE_BAR_HEIGHT / 2 ) + (FONT_HEIGHT / 2) - 3);


  return 1;
};
