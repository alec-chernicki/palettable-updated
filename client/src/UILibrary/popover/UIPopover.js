// @flow
import styles from './UIPopover.css';
import CSSModules from 'react-css-modules';
import * as React from 'react';
import { Manager, Target, Popper, Arrow } from 'react-popper';
import CSSTransition from 'react-transition-group/CSSTransition';

type Props = {
  +isOpen: boolean,
  +placement: 'top' | 'bottom' | 'left' | 'right',
  +children: React.Node,
  +content: React.Node,
  +styles: Object,
};

class UIPopover extends React.Component<Props> {
  static defaultProps = {
    isOpen: false,
    placement: 'top',
  };

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

export default CSSModules(UIPopover, styles);
