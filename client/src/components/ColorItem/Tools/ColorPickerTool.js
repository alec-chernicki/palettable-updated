// @flow
import PropTypes from 'prop-types';
import React from 'react';
import ColorPicker from '../../ColorPicker/ColorPicker';
import SliderIcon from '../../SliderIcon/SliderIcon';
import { connect } from 'react-redux';
import { changeLikedColor } from '../../../redux/actions/likedColors';
import UIPopover from '../../../UILibrary/popover/UIPopover';
import { setActiveColorPickerId } from '../../../redux/actions/colorPicker';

class ColorPickerTool extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(colorData) {
    const { onChange, color } = this.props;

    onChange(colorData.hex.toUpperCase());
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
    const { color, isActive } = this.props;

    return (
      <UIPopover
        placement="bottom"
        isOpen={isActive}
        content={this.renderColorPicker()}
      >
        <SliderIcon
          hexCode={color.hexCode}
          active={isActive}
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

ColorPickerTool.defaultProps = {
  onClick: () => {},
}

const mapStateToProps = (state, { color }) => {
  return {
    isActive: state.colorPicker.activeColorPickerId === color.id
  };
};

const mapDispatchToProps = (dispatch, { color }) => {
  return {
    onBlur: () => dispatch(setActiveColorPickerId('')),
    onClick: () => dispatch(setActiveColorPickerId(color.id)),
    onChange: hexCode => dispatch(changeLikedColor({ color, newHexCode: hexCode })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorPickerTool);
