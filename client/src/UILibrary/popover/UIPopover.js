import styles from './UIPopover.css';
import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react';
import { Manager, Target, Popper, Arrow } from 'react-popper';

const placementProps = ['top', 'bottom', 'left', 'right'];

class UIPopover extends React.Component {
  renderContent() {
    const { placement, content, isOpen, styles } = this.props;

    if (!isOpen) {
      return null;
    }

    return (
      <Popper placement={placement} className={styles['popper']}>
        {content}
        <Arrow className={styles['popper-arrow']} />
      </Popper>
    );
  }

  render() {
    const { children } = this.props;

    return (
      <Manager>
        <Target>
          {children}
        </Target>
        {this.renderContent()}
      </Manager>
    );
  }
}

UIPopover.defaultProps = {
  isOpen: false,
  placement: 'top',
};

UIPopover.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  placement: PropTypes.oneOf(placementProps),
  children: PropTypes.node.isRequired,
};

export default CSSModules(UIPopover, styles);
