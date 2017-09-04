import styles from './ColorItem.css';
import CSSModules from 'react-css-modules';
import React, { PropTypes, PureComponent } from 'react';
import ColorName from '../ColorName/ColorName';
import ColorItemFooter from './ColorItemFooter';
import ColorPickerTool from './Tools/ColorPickerTool';
import RemoveTool from './Tools/RemoveTool';
import { MoonLoader } from 'halogen';
import { connect } from 'react-redux';
import getInterfaceAttributes from 'utils/getInterfaceAttributes';

class ColorItem extends PureComponent {
  renderLoader() {
    const { color: { hexCode } } = this.props;
    const interfaceAttributes = getInterfaceAttributes(hexCode);

    return <MoonLoader color={interfaceAttributes.color} />;
  }
  renderTools() {
    const { color } = this.props;
    return (
      <div>
        <ColorName color={color} />
        <div styleName="toolbox">
          {/* <ColorPickerTool color={color} /> */}
          <RemoveTool color={color} />
        </div>
      </div>
    );
  }

  renderContent() {
    const { isFetching, isLastItem } = this.props;

    if (isFetching && isLastItem) {
      return this.renderLoader();
    }

    return this.renderTools();
  }
  render() {
    const { color, isLastItem } = this.props;

    const style = {
      backgroundColor: color.hexCode,
    };

    return (
      <li style={style} styleName="color-item">
        {this.renderContent()}
        <ColorItemFooter
          isLastItem={isLastItem}
          active={isLastItem}
          color={color}
        />
      </li>
    );
  }
}

ColorItem.propTypes = {
  color: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isLastItem: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  return {
    isFetching: state.dataStatus.isFetching,
  };
};

export default connect(mapStateToProps)(CSSModules(ColorItem, styles));
