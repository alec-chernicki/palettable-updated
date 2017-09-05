import React, { PropTypes } from 'react';
import ColorPicker from '../../ColorPicker/ColorPicker';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SliderIcon from '../../SliderIcon/SliderIcon';
import { connect } from 'react-redux';
import { Manager, Target, Popper, Arrow } from 'react-popper';
import { changeColor, setIsColorPickerActive } from 'redux/actions/likedColors';

class ColorPickerTool extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(colorData) {
    const { onChange, color } = this.props;

    onChange({ color: color, newHexCode: colorData.hex.toUpperCase() });
  }

  handleClick(e) {
    const { onClick } = this.props;

    e.stopPropagation();
    onClick();
  }

  renderColorPicker() {
    const { color: { hexCode, isColorPickerActive }, onBlur } = this.props;

    if (!isColorPickerActive) {
      return null;
    }

    return (
      <Popper placement="bottom">
        <Arrow />
        <ColorPicker
          onBlur={onBlur}
          onChange={this.handleChange}
          color={hexCode}
        />
      </Popper>
    );
  }

  render() {
    const { color } = this.props;

    return (
      <Manager>
        <Target>
          <SliderIcon
            hexCode={color.hexCode}
            active={color.isColorPickerActive}
            onClick={this.handleClick}
          />
        </Target>
        {this.renderColorPicker()}
      </Manager>
    );
  }
}

ColorPickerTool.propTypes = {
  color: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (dispatch, { color }) => {
  return {
    onBlur: () => dispatch(setIsColorPickerActive(color, false)),
    onClick: () => dispatch(setIsColorPickerActive(color, true)),
    onChange: hexCode => dispatch(changeColor(hexCode)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorPickerTool);
