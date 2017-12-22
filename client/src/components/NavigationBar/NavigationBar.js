// @flow
import PropTypes from 'prop-types';
import * as React from 'react';
import styles from './NavigationBar.css';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import likedColorsSelector from '../../redux/selectors/likedColorsSelector';
import ExportButton from '../Export/ExportButton';

type Props = {
  likedColors: Array<Object>,
};

class NavigationBar extends React.Component<Props> {
  renderSocialLinks() {
    return (
      <div>
        <a />
      </div>
    );
  }

  render() {
    return (
      <div styleName="navigation-bar">
        <div styleName="content">
          <a href="/">
            <h1>PALETTABLE</h1>
          </a>
        </div>
        <div styleName="content">
          <ExportButton />
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
