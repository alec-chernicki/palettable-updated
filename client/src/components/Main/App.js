import styles from './App.css';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import React from 'react';
import Title from '../Title/Title';
import ColorList from '../ColorList/ColorList';
import NavigationBar from '../NavigationBar/NavigationBar';
import UILoader from 'UILibrary/loader/UILoader';
import SuggestedColorsTray from 'components/SuggestedColorsTray/SuggestedColorsTray';

const App = () => {
  return (
    <div styleName="app">
      <NavigationBar />
      {/* <SuggestedColorsTray /> */}
      <ColorList />
    </div>
  );
};

export default CSSModules(App, styles);
