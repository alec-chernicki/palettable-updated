import PropTypes from 'prop-types';
import React from 'react';
import styles from './NavigationBar.css';
import CSSModules from 'react-css-modules';
import UIButton from 'UILibrary/button/UIButton';
import UILink from 'UILibrary/button/UILink';

class NavigationBar extends React.Component {
  render() {
    return (
      <div styleName="navigation-bar">
        <a href="/">
          <h1>PALETTABLE</h1>
        </a>
        <div>
          <UILink>Help</UILink>
          <UIButton>Export</UIButton>
        </div>
      </div>
    );
  }
}

export default CSSModules(NavigationBar, styles);
