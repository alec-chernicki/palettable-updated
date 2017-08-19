import styles from './ColorItem.css';
import CSSModules from 'react-css-modules';
import React, { PropTypes, Component } from 'react';
import ColorName from '../ColorName/ColorName';
import SliderIcon from '../SliderIcon/SliderIcon';
import UILoader from 'UILibrary/loader/UILoader';
import ColorItemFooter from './ColorItemFooter';
import ColorPickerTool from './Tools/ColorPickerTool';

class ColorItem extends Component {
  render() {
    const { hexCode, isLastItem } = this.props;

    const style = {
      backgroundColor: hexCode,
    };

    return (
      <li key={hexCode} style={style} styleName="color-item">
        <div>
          <ColorName hexCode={hexCode} />
          <div styleName="toolbox">
            <ColorPickerTool hexCode={hexCode} />
          </div>
        </div>
        <ColorItemFooter active={isLastItem} hexCode={hexCode} />
      </li>
    );
  }
}

export default CSSModules(ColorItem, styles);
