import styles from './ColorItemFooter.css';
import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import UIButton from 'UILibrary/button/UIButton';

class ColorItemFooter extends React.Component {
  render() {
    const { active } = this.props;
    const componentClass = classNames({
      active: active,
      inactive: !active,
    });

    return (
      <div styleName={componentClass}>
        <UIButton use="negative" className="button-dislike">
          Dislike
        </UIButton>
        <UIButton use="positive" className="button-like">
          Like
        </UIButton>
      </div>
    );
  }
}

ColorItemFooter.propTypes = {
  onClick: PropTypes.func.isRequired,
};

ColorItemFooter.defaultProps = {
  active: false,
};

export default CSSModules(ColorItemFooter, styles);
