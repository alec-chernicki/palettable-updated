import styles from './ColorItem.css';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import React from 'react';
import ColorName from '../ColorName/ColorName';
import ColorItemFooter from './ColorItemFooter';
import ColorPickerTool from './Tools/ColorPickerTool';
import RemoveTool from './Tools/RemoveTool';
import { MoonLoader } from 'halogen';
import { connect } from 'react-redux';
import getInterfaceAttributes from 'utils/getInterfaceAttributes';
import CSSTransition from 'react-transition-group/CSSTransition';
import TransitionGroup from 'react-transition-group/TransitionGroup';

class ColorItem extends React.PureComponent {
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
    const { color, isLastItem } = this.props;

    const style = {
      backgroundColor: color.hexCode,
    };

    return (
      <li style={style} styleName="color-item">
        <TransitionGroup>
          {this.renderContent()}
        </TransitionGroup>
        <ColorItemFooter
          isLastItem={isLastItem}
          active={isLastItem}
          color={color}
        />
      </li>
    );
  }
}

ColorItem.propTypes = {
  color: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isLastItem: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  return {
    isFetching: state.dataStatus.isFetching,
  };
};

export default connect(mapStateToProps)(CSSModules(ColorItem, styles));
