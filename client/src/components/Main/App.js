// @flow
import styles from './App.css';
import CSSModules from 'react-css-modules';
import * as React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import { connect } from 'react-redux';
import { requestPalette } from '../../redux/actions/suggestedColors';

type Props = {
  requestPalette: () => mixed,
  children: React.Node,
};

class App extends React.Component<Props> {
  componentDidMount() {
    const { requestPalette } = this.props;

    requestPalette();
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
    requestPalette: () => dispatch(requestPalette()),
  };
};

export default connect(null, mapDispatchToProps)(CSSModules(App, styles));
