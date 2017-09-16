import styles from './App.css';
import CSSModules from 'react-css-modules';
import React from 'react';
import ColorList from '../ColorList/ColorList';
import NavigationBar from '../NavigationBar/NavigationBar';
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
