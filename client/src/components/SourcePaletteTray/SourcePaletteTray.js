import styles from './SourcePaletteTray.css';
import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class SourcePaletteTray extends React.Component {
  renderColors() {
    const { shownPalette } = this.props;

    return shownPalette.map((color, key) => {
      const { hexCode } = color;
      const styles = {
        backgroundColor: hexCode,
      };

      return <div key={key} styleName="color" style={styles} />;
    });
  }
  render() {
    return (
      <div styleName="source-palette-tray">
        <p styleName="source-title">
          Now suggesting colors from: Cool palette one
        </p>
        <div styleName="color-list">
          {this.renderColors()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    shownPalette: state.sourcePalette,
  };
};

export default connect(mapStateToProps)(CSSModules(SourcePaletteTray, styles));
