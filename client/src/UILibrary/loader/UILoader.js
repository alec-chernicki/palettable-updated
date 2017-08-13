import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import styles from './UILoader.css';

class UILoader extends React.Component {
  render() {
    const { active } = this.props;
    const componentClass = classNames({
      active: active,
      inactive: !active,
    });

    return (
      <div styleName={componentClass}>
        <div styleName="dot" />
        <div styleName="dot" />
        <div styleName="dot" />
      </div>
    );
  }
}

UILoader.defaultProps = {
  active: false,
};

export default CSSModules(UILoader, styles);
