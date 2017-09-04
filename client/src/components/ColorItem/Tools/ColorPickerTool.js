import React, { PropTypes } from 'react';
import ColorPicker from '../../ColorPicker/ColorPicker';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SliderIcon from '../../SliderIcon/SliderIcon';
import { connect } from 'react-redux';
import { Manager, Target, Popper, Arrow } from 'react-popper';
import { changeColor } from 'redux/actions/likedColors';

class ColorPickerTool extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(colorData) {
    const { onChange, color } = this.props;

    onChange({ color: color, newHexCode: colorData.hex.toUpperCase() });
  }

  renderColorPicker() {
    const { color: { hexCode } } = this.props;

    return (
      <Popper placement="bottom">
        <ColorPicker onChange={this.handleChange} color={hexCode} />
        <Arrow />
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
            toggled={color.pickerActive}
            onToggle={this.handlePickerToggle}
          />
        </Target>
        <ReactCSSTransitionGroup
          transitionName={'color-picker-animation'}
          transitionEnterTimeout={175}
          transitionLeaveTimeout={175}
        >
          {this.renderColorPicker()}
        </ReactCSSTransitionGroup>
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

const mapDispatchToProps = dispatch => {
  return {
    onChange: hexCode => dispatch(changeColor(hexCode)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorPickerTool);
