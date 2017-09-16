import PropTypes from 'prop-types';
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './UILink.css';

class UILink extends React.Component {
  render() {
    const { children, onClick, external } = this.props;

    return (
      <a onClick={onClick} styleName="uiLink">
        {this.props.children}
      </a>
    );
  }
}

export default CSSModules(UILink, styles);
