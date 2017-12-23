// @flow
import styles from './SuggestedColorsTray.css';
import CSSModules from 'react-css-modules';
import React from 'react';
import { connect } from 'react-redux';

class SuggestedColorsTray extends React.Component<Props> {
  renderColors() {
    const { suggestedColors } = this.props;

    return suggestedColors.map((hexCode: string, key: number) => {
      const styles = { backgroundColor: hexCode };

      return <div key={key} styleName="color" style={styles} />;
    });
  }
  render() {
    return (
      <div styleName="source-palette-tray">
        <p styleName="source-title">
          Now suggesting colors from: Cool palette one
        </p>
        <div styleName="color-list">{this.renderColors()}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ suggestedColors }: ReduxStoreType) => {
  return {
    suggestedColors,
  };
};

export default connect(mapStateToProps)(
  CSSModules(SuggestedColorsTray, styles)
);
