import styles from './App.css';
import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react';
import Title from '../Title/Title';
import ColorList from '../ColorList/ColorList';
import NavigationBar from '../NavigationBar/NavigationBar';
import UILoader from 'UILibrary/loader/UILoader';
import SourcePaletteTray from 'components/SourcePaletteTray/SourcePaletteTray';

const App = () => {
  return (
    <div styleName="app">
      <NavigationBar />
      <SourcePaletteTray />
      <ColorList />
    </div>
  );
};

export default CSSModules(App, styles);
