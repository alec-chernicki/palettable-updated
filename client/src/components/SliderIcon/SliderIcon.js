import styles from './SliderIcon.css';
import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import getInterfaceAttributes from 'utils/getInterfaceAttributes';

class SliderIcon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(e) {
    this.setState({ active: true });
  }

  handleMouseLeave(e) {
    this.setState({ active: false });
  }

  render() {
    const { onClick, hexCode } = this.props;
    const { active } = this.state;
    const interfaceAttributes = getInterfaceAttributes(hexCode);
    const componentClass = classNames({
      active: active,
      inactive: !active,
    });

    return (
      <div
        onClick={onClick}
        styleName={componentClass}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div styleName={interfaceAttributes.className}>
          <div styleName="item-line" />
          <div styleName="item-circle" />
        </div>
        <div styleName={interfaceAttributes.className}>
          <div styleName="item-line" />
          <div styleName="item-circle" />
        </div>
        <div styleName={interfaceAttributes.className}>
          <div styleName="item-line" />
          <div styleName="item-circle" />
        </div>
      </div>
    );
  }
}

SliderIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  hexCode: PropTypes.string.isRequired,
};

export default CSSModules(SliderIcon, styles);
