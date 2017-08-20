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
    const { hexCode } = this.props;
    const interfaceAttributes = getInterfaceAttributes(hexCode);

    return <MoonLoader color={interfaceAttributes.color} />;
  }
  renderTools() {
    const { hexCode } = this.props;
    return (
      <div>
        <ColorName hexCode={hexCode} />
        <div styleName="toolbox">
          <ColorPickerTool hexCode={hexCode} />
          <RemoveTool hexCode={hexCode} />
        </div>
      </div>
    );
  }

  renderContent() {
    const { isFetching } = this.props;

    if (isFetching) {
      return this.renderLoader();
    }

    return this.renderTools();
  }
  render() {
    const { hexCode, isLastItem } = this.props;

    const style = {
      backgroundColor: hexCode,
    };

    return (
      <li style={style} styleName="color-item">
        {this.renderContent()}
        <ColorItemFooter
          isLastItem={isLastItem}
          active={isLastItem}
          hexCode={hexCode}
        />
      </li>
    );
  }
}

ColorItem.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  isLastItem: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  return {
    isFetching: state.dataStatus.isFetching,
  };
};

export default connect(mapStateToProps)(CSSModules(ColorItem, styles));
