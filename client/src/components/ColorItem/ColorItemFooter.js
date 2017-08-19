import styles from './ColorItemFooter.css';
import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import UIButton from 'UILibrary/button/UIButton';
import { connect } from 'react-redux';
import { dislikeColor } from 'redux/actions/dislikedColors';
import { likeColor } from 'redux/actions/likedColors';

class ColorItemFooter extends React.Component {
  render() {
    const { active, onLike, onDislike } = this.props;
    const componentClass = classNames({
      active: active,
      inactive: !active,
    });

    return (
      <div styleName={componentClass}>
        <UIButton use="negative" className="button-dislike" onClick={onDislike}>
          Dislike
        </UIButton>
        <UIButton use="positive" className="button-like" onClick={onLike}>
          Like
        </UIButton>
      </div>
    );
  }
}

ColorItemFooter.propTypes = {
  onLike: PropTypes.func.isRequired,
  onDislike: PropTypes.func.isRequired,
  hexCode: PropTypes.string.isRequired,
};

ColorItemFooter.defaultProps = {
  active: false,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, { hexCode }) => {
  return {
    onLike: () => dispatch(likeColor(hexCode)),
    onDislike: () => dispatch(dislikeColor(hexCode)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CSSModules(ColorItemFooter, styles)
);
