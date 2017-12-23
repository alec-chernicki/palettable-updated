// @flow
import { partial } from 'lodash';
import styles from './ColorItemFooter.css';
import CSSModules from 'react-css-modules';
import React from 'react';
import classNames from 'classnames';
import UIButton from '../../UILibrary/button/UIButton';
import { connect } from 'react-redux';
import { dislikeColor } from '../../redux/actions/dislikedColors';
import { likeColor } from '../../redux/actions/likedColors';
import likedColorsSelector from '../../redux/selectors/likedColorsSelector';
import ExportButton from '../Export/ExportButton';

type Props = {
  +isAtMaximum: boolean,
  +onLike: (color: ColorType) => {},
  +onDislike: (color: ColorType) => {},
  +color: ColorType,
  +active: boolean,
  +styles: Object,
  +className: string,
};

class ColorItemFooter extends React.Component<Props> {
  static defaultProps = {
    isAtMaximum: false,
  };

  renderMessage() {
    const { isAtMaximum } = this.props;

    if (!isAtMaximum) {
      return null;
    }

    return <p styleName="message">Maximum of 5 colors</p>;
  }

  renderExportButton() {
    return <ExportButton />;
  }

  renderLikeButton() {
    const { onLike, color } = this.props;

    return (
      <UIButton use="positive" onClick={partial(onLike, color)}>
        Like
      </UIButton>
    );
  }

  renderSecondaryActionButton() {
    const { isAtMaximum } = this.props;

    if (isAtMaximum) {
      return this.renderExportButton();
    }

    return this.renderLikeButton();
  }

  renderPrimaryActionButton() {
    const { onDislike, color, styles } = this.props;

    return (
      <UIButton
        use="negative"
        className={styles['button-dislike']}
        onClick={partial(onDislike, color)}
      >
        Dislike
      </UIButton>
    );
  }

  render() {
    const { active, className } = this.props;
    const componentClass = classNames({
      active: active,
      inactive: !active,
    });

    return (
      <div styleName={componentClass} className={className}>
        {this.renderMessage()}
        <div styleName="buttons">
          {this.renderPrimaryActionButton()}
          {this.renderSecondaryActionButton()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const likedColors = likedColorsSelector(state);

  return {
    isAtMaximum: likedColors.length >= 5,
    color: likedColors[likedColors.length - 1],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLike: color => dispatch(likeColor(color)),
    onDislike: color => dispatch(dislikeColor(color)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CSSModules(ColorItemFooter, styles)
);
