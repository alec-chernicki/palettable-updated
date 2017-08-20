import styles from './ColorItem.css';
import CSSModules from 'react-css-modules';
import React, { PropTypes, PureComponent } from 'react';
import ColorName from '../ColorName/ColorName';
import ColorItemFooter from './ColorItemFooter';
import ColorPickerTool from './Tools/ColorPickerTool';
import RemoveTool from './Tools/RemoveTool';
import { MoonLoader } from 'halogen';
import { connect } from 'react-redux';

class ColorItem extends PureComponent {
  renderLoader() {
    const { isFetching } = this.props;
    console.log(isFetching);
    if (!isFetching) {
      return null;
    }

    return <MoonLoader color="#333" />;
  }
  render() {
    const { hexCode, isLastItem } = this.props;

    const style = {
      backgroundColor: hexCode,
    };

    return (
      <li key={hexCode} style={style} styleName="color-item">
        {this.renderLoader()}
        <div>
          <ColorName hexCode={hexCode} />
          <div styleName="toolbox">
            <ColorPickerTool hexCode={hexCode} />
            <RemoveTool hexCode={hexCode} />
          </div>
        </div>
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
