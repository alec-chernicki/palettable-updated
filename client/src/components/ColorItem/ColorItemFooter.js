import styles from './ColorItemFooter.css';
import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import UIButton from 'UILibrary/button/UIButton';
import { connect } from 'react-redux';
import { dislikeColor } from 'redux/actions/dislikedColors';
import { likeColor } from 'redux/actions/likedColors';
import likedColorsSelector from 'redux/selectors/likedColorsSelector';

class ColorItemFooter extends React.Component {
  renderMessage() {
    return <p styleName="message">Maximum of 5 colors</p>;
  }

  renderButtons() {
    const { onLike, onDislike, styles } = this.props;

    return [
      <UIButton key="dislike" use="negative" onClick={onDislike}>
        Dislike
      </UIButton>,
      <UIButton
        key="like"
        use="positive"
        className={styles['button-like']}
        onClick={onLike}
      >
        Like
      </UIButton>,
    ];
  }

  renderContent() {
    const { isAtMaximum } = this.props;

    if (isAtMaximum) {
      return this.renderMessage();
    }

    return this.renderButtons();
  }

  render() {
    const { active } = this.props;
    const componentClass = classNames({
      active: active,
      inactive: !active,
    });

    return (
      <div styleName={componentClass}>
        {this.renderContent()}
      </div>
    );
  }
}

ColorItemFooter.propTypes = {
  onLike: PropTypes.func.isRequired,
  onDislike: PropTypes.func.isRequired,
  color: PropTypes.object.isRequired,
  isLastItem: PropTypes.bool.isRequired,
  isAtMaximum: PropTypes.bool.isRequired,
};

ColorItemFooter.defaultProps = {
  isLastItem: false,
  isAtMaximum: false,
};

const mapStateToProps = state => ({
  isAtMaximum: likedColorsSelector(state).length >= 5,
});

const mapDispatchToProps = (dispatch, { color }) => {
  return {
    onLike: () => dispatch(likeColor(color)),
    onDislike: () => dispatch(dislikeColor(color)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CSSModules(ColorItemFooter, styles)
);
