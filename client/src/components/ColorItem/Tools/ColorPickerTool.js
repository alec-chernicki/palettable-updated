import React, { PropTypes } from 'react';
import ColorPicker from '../../ColorPicker/ColorPicker';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SliderIcon from '../../SliderIcon/SliderIcon';

class ColorPickerTool extends React.Component {
  constructor(props) {
    super(props);

    this.handlePickerToggle = this.handlePickerToggle.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handlePickerToggle() {
    const { onTogglePicker, color } = this.props;

    onTogglePicker(color);
  }

  handleColorChange(newColor) {
    const { onSubmit, color } = this.props;

    onSubmit(color, newColor.hex.toUpperCase());
  }

  renderColorPicker() {
    const { hexCode } = this.props;

    return (
      <ColorPicker
        onChange={this.handleColorChange}
        onToggle={this.handlePickerToggle}
        color={hexCode}
      />
    );
  }

  render() {
    const { color } = this.props;

    return (
      <div>
        <SliderIcon
          toggled={color.pickerActive}
          onToggle={this.handlePickerToggle}
        />
        {/* <ReactCSSTransitionGroup
          transitionName={"color-picker-animation"}
          transitionEnterTimeout={175}
          transitionLeaveTimeout={175}
          >
          {this.renderColorPicker()}
        </ReactCSSTransitionGroup> */}
      </div>
    );
  }
}

ColorPickerTool.defaultProps = {
  color: {},
  hexCode: PropTypes.string.isRequired,
};

export default ColorPickerTool;
