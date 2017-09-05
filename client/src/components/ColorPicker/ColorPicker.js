import styles from './ColorPicker.css';
import CSSModules from 'react-css-modules';
import React, { Component, PropTypes } from 'react';
import { CustomPicker } from 'react-color';
import { Hue, Saturation } from 'react-color/lib/components/common';

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    window.addEventListener('mousedown', this.props.onBlur);
  }
  handleClick(e) {
    e.stopPropagation();
  }
  handleChange(colorData) {
    this.props.onChange(colorData);
  }
  render() {
    return (
      <div onClick={this.handleClick} onMouseDown={this.handleClick}>
        <div styleName="picker">
          <div styleName="saturation">
            <Saturation
              {...this.props}
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div styleName="controls">
            <div styleName="sliders">
              <div styleName="hue">
                <Hue {...this.props} onChange={this.handleChange.bind(this)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ColorPicker.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default CustomPicker(CSSModules(ColorPicker, styles));
