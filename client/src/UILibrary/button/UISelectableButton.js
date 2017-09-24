import PropTypes from 'prop-types';
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './UISelectableButton.css';
import classNames from 'classnames';

class UISelectableButton extends React.Component {
  renderImage() {
    const { image } = this.props;

    if (!image) {
      return null;
    }

    return <img styleName="image" alt="" src={image} />;
  }

  render() {
    const { children, onClick, className, href } = this.props;

    return (
      <a
        styleName="selectable-button"
        onClick={onClick}
        className={className}
        href={href}
      >
        {this.renderImage()}
        {children}
      </a>
    );
  }
}

UISelectableButton.propTypes = {
  image: PropTypes.string.isRequired,
};

export default CSSModules(UISelectableButton, styles);
