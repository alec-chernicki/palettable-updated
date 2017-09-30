import PropTypes from 'prop-types';
import React from 'react';
import ColorPicker from '../../ColorPicker/ColorPicker';
import SliderIcon from '../../SliderIcon/SliderIcon';
import { connect } from 'react-redux';
import { changeColor } from 'redux/actions/likedColors';
import UIPopover from 'UILibrary/popover/UIPopover';

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
    const { color: { hexCode }, onBlur } = this.props;

    return (
      <ColorPicker
        onBlur={onBlur}
        onChange={this.handleChange}
        color={hexCode}
      />
    );
  }

  render() {
    const { color } = this.props;

    return (
      <UIPopover
        placement="bottom"
        isOpen={color.isColorPickerActive}
        content={this.renderColorPicker()}
      >
        <SliderIcon
          hexCode={color.hexCode}
          active={color.isColorPickerActive}
          onClick={this.handleClick}
        />
      </UIPopover>
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
    // onBlur: () => dispatch(setIsColorPickerActive(color, false)),
    // onClick: () => dispatch(setIsColorPickerActive(color, true)),
    onChange: hexCode => dispatch(changeColor(hexCode)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorPickerTool);
