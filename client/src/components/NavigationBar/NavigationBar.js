// @flow
import PropTypes from 'prop-types';
import * as React from 'react';
import styles from './NavigationBar.css';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import likedColorsSelector from '../../redux/selectors/likedColorsSelector';
import ExportButton from '../Export/ExportButton';
import TwitterIcon from 'react-icons/lib/fa/twitter';

type Props = {
  likedColors: Array<Object>,
};

class NavigationBar extends React.Component<Props> {
  handleClickTwitter = () => {
    const text =
      'Check out this great color palette I made with Palettable, made by @whynotdostuff.';
    const url = window.location.href;
    window.open(
      `http://twitter.com/intent/tweet?text=${text}&url=${url}`,
      'Share on Twitter',
      'height=400,width=550,resizable=1, toolbar=0,menubar=0,status=0, location=0'
    );
  };

  renderSocialLinks() {
    return (
      <div styleName="social-icons">
        <a onClick={this.handleClickTwitter}>
          <TwitterIcon size={20} styleName="social-icon" />
        </a>
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
          <h2 styleName="subtitle">
            Generate beautiful color palettes using the knowledge of millions of
            designers.
          </h2>
        </div>
        <div styleName="content">
          {this.renderSocialLinks()}
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
