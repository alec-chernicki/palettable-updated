// @flow
import PropTypes from 'prop-types';
import * as React from 'react';
import styles from './NavigationBar.css';
import CSSModules from 'react-css-modules';
import UIButton from '../../UILibrary/button/UIButton';
import { connect } from 'react-redux';
import likedColorsSelector from '../../redux/selectors/likedColorsSelector';

type Props = {
  likedColors: Array<Object>,
};

class NavigationBar extends React.Component<Props> {
  render() {
    return (
      <div styleName="navigation-bar">
        <a href="/">
          <h1>PALETTABLE</h1>
        </a>
        <div>
          <UIButton to="/(:palette)/export">Export</UIButton>
        </div>
      </div>
    );
  }
}

NavigationBar.propTypes = {
  likedColors: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return {
    likedColors: likedColorsSelector(state),
  };
};

export default connect(mapStateToProps, null)(
  CSSModules(NavigationBar, styles)
);
