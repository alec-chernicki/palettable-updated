import styles from './UIPopover.css';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import React from 'react';
import { Manager, Target, Popper, Arrow } from 'react-popper';
import CSSTransition from 'react-transition-group/CSSTransition';

const placementProps = ['top', 'bottom', 'left', 'right'];

class UIPopover extends React.Component {
  renderContent() {
    const { placement, content, isOpen, styles } = this.props;

    return (
      <CSSTransition
        in={isOpen}
        mountOnEnter={true}
        unmountOnExit={true}
        timeout={200}
        classNames={{
          enter: styles['popover-enter'],
          enterActive: styles['popover-enter-active'],
          exit: styles['popover-exit'],
          exitActive: styles['popover-exit-active'],
        }}
      >
        <div styleName="popper-animation-wrapper">
          <Popper placement={placement} className={styles['popper']}>
            {content}
            <Arrow className={styles['popper-arrow']} />
          </Popper>
        </div>
      </CSSTransition>
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
