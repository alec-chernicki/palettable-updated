import PropTypes from 'prop-types';
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './UIButton.css';
import classNames from 'classnames';

const useProps = {
  primary: 'primary',
  positive: 'positive',
  negative: 'negative',
};

class UIButton extends React.Component {
  render() {
    const { children, onClick, className, use, href } = this.props;
    const componentClass = classNames({
      primary: use === useProps.primary,
      positive: use === useProps.positive,
      negative: use === useProps.negative,
    });

    return (
      <a
        onClick={onClick}
        styleName={componentClass}
        className={className}
        href={href}
      >
        {children}
      </a>
    );
  }
}

UIButton.propTypes = {
  use: PropTypes.oneOf(Object.keys(useProps)),
};

UIButton.defaultProps = {
  use: useProps.primary,
};

export default CSSModules(UIButton, styles);
