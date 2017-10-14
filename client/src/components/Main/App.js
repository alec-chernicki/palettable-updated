// @flow
import styles from './App.css';
import CSSModules from 'react-css-modules';
import * as React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import { connect } from 'react-redux';
import { requestPalette } from '../../redux/actions/suggestedColors';
import { addLikedColors } from '../../redux/actions/likedColors';
import url from '../../utils/url';
import type { ColorType } from '../../constants/FlowTypes';

type Props = {
  hydrateFromUrl: (ColorType[]) => void,
  requestRandomPalette: () => mixed,
  children: React.Node,
};

class App extends React.Component<Props> {
  componentDidMount() {
    const { requestRandomPalette, hydrateFromUrl } = this.props;
    const paletteFromUrl = url.parseColors();
    debugger
    if (paletteFromUrl.length) {
      return hydrateFromUrl(paletteFromUrl);
    }

    requestRandomPalette();
  }

  render() {
    const { children } = this.props;

    return (
      <div styleName="app">
        <NavigationBar />
        {children}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestRandomPalette: () => dispatch(requestPalette()),
    hydrateFromUrl: (colors) => dispatch(addLikedColors(colors)),
  };
};

export default connect(null, mapDispatchToProps)(CSSModules(App, styles));
