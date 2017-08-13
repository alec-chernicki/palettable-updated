import Color from 'color';

const _getInterfaceColor = colorObject => {
  const black = Color('#333');
  const white = Color('#FFF');

  const interfaceColor = colorObject.dark()
    ? colorObject.mix(white)
    : colorObject.mix(black);

  return interfaceColor.hex();
};

const _getInterfaceClassName = colorObject => {
  return colorObject.dark() ? 'light' : 'dark';
};

const getInterfaceAttributes = hexCode => {
  const colorObject = Color(hexCode);

  return {
    color: _getInterfaceColor(colorObject),
    className: _getInterfaceClassName(colorObject),
  };
};

export default getInterfaceAttributes;
