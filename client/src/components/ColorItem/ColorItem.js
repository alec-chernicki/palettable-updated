import styles from './ColorItem.css';
import CSSModules from 'react-css-modules';
import React, { PropTypes, Component } from 'react';
import ColorName from '../ColorName/ColorName';
import SliderIcon from '../SliderIcon/SliderIcon';
import UILoader from 'UILibrary/loader/UILoader';
import ColorItemFooter from './ColorItemFooter';
import ColorPickerTool from './Tools/ColorPickerTool';

class ColorItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({ isActive: true });
  }

  handleMouseLeave() {
    this.setState({ isActive: false });
  }

  render() {
    const { hexCode } = this.props;
    const { isActive } = this.state;

    const style = {
      backgroundColor: hexCode,
    };

    return (
      <li
        key={hexCode}
        style={style}
        styleName="color-item"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div>
          <ColorName hexCode={hexCode} />
          <div styleName="toolbox">
            <ColorPickerTool hexCode={hexCode} />
          </div>
        </div>
        <ColorItemFooter active={isActive} />
      </li>
    );
  }
}

export default CSSModules(ColorItem, styles);
