// @flow
import styles from './SliderIcon.css';
import CSSModules from 'react-css-modules';
import React from 'react';
import classNames from 'classnames';
import getInterfaceAttributes from '../../utils/getInterfaceAttributes';

type Props = {
  onClick: () => mixed,
  hexCode: string,
};

type State = {
  active: boolean,
};

class SliderIcon extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  handleMouseEnter = (e) => {
    this.setState({ active: true });
  }

  handleMouseLeave = (e) => {
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

export default CSSModules(SliderIcon, styles);
