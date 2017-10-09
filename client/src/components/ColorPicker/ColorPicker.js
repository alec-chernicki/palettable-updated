// @flow
import styles from './ColorPicker.css';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { CustomPicker } from 'react-color';
import { Hue, Saturation } from 'react-color/lib/components/common';

type Props = {
  +onBlur: () => mixed,
  +onChange: (colorData: mixed) => mixed,
};

class ColorPicker extends Component<Props> {
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

export default CustomPicker(CSSModules(ColorPicker, styles));
