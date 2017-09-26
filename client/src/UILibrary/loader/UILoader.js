// @flow
import React from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import styles from './UILoader.css';

type Props = {
  +active: boolean,
};

class UILoader extends React.Component<Props> {
  static defaultProps = {
    active: false,
  };

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

export default CSSModules(UILoader, styles);
