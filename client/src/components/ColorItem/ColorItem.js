// @flow
import styles from './ColorItem.css';
import CSSModules from 'react-css-modules';
import React from 'react';
import ColorName from '../ColorName/ColorName';
import ColorItemFooter from './ColorItemFooter';
import ColorPickerTool from './Tools/ColorPickerTool';
import RemoveTool from './Tools/RemoveTool';
import { MoonLoader } from 'halogen';
import { connect } from 'react-redux';
import getInterfaceAttributes from '../../utils/getInterfaceAttributes';
import CSSTransition from 'react-transition-group/CSSTransition';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import type { ReduxStore, ColorType } from '../../constants/FlowTypes';

type Props = {
  color: ColorType,
  isFetching: boolean,
  isLastItem: boolean,
  styles: Object,
};

class ColorItem extends React.PureComponent<Props> {
  renderLoader() {
    const { color: { hexCode }, styles } = this.props;
    const interfaceAttributes = getInterfaceAttributes(hexCode);

    return (
      <CSSTransition
        key="loader"
        timeout={400}
        classNames={{
          enter: styles['fade-enter'],
          enterActive: styles['fade-enter-active'],
          exit: styles['fade-exit'],
          exitActive: styles['fade-exit-active'],
        }}
      >
        <div styleName="loader-container">
          <MoonLoader color={interfaceAttributes.color} />
        </div>
      </CSSTransition>
    );
  }
  renderTools() {
    const { color, styles } = this.props;
    return (
      <CSSTransition
        key="tools"
        timeout={200}
        classNames={{
          enter: styles['fade-enter'],
          enterActive: styles['fade-enter-active'],
          exit: styles['fade-exit'],
          exitActive: styles['fade-exit-active'],
        }}
      >
        <div>
          <ColorName color={color} />
          <div styleName="tool-icons">
            <ColorPickerTool color={color} />
            <RemoveTool color={color} />
          </div>
        </div>
      </CSSTransition>
    );
  }

  renderContent() {
    const { isFetching, isLastItem } = this.props;

    if (isFetching && isLastItem) {
      return this.renderLoader();
    }

    return this.renderTools();
  }
  render() {
    const { color, isLastItem, styles } = this.props;

    const style = {
      backgroundColor: color.hexCode,
    };

    return (
      <li style={style} styleName="color-item">
        <TransitionGroup>{this.renderContent()}</TransitionGroup>
        <ColorItemFooter
          active={isLastItem}
          className={styles['desktop-footer']}
        />
      </li>
    );
  }
}

const mapStateToProps = (state: ReduxStore) => {
  return {
    isFetching: state.dataStatus.isFetching,
  };
};

export default connect(mapStateToProps)(CSSModules(ColorItem, styles));
