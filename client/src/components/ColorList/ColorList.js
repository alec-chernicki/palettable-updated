import styles from './ColorList.css';
import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { requestPalette } from 'redux/actions/suggestedColors';
import likedColorsSelector from 'redux/selectors/likedColorsSelector';
import ColorItem from 'components/ColorItem/ColorItem';
import getInterfaceAttributes from 'utils/getInterfaceAttributes';
import { MoonLoader } from 'halogen';
import CSSTransition from 'react-transition-group/CSSTransition';
import TransitionGroup from 'react-transition-group/TransitionGroup';

class ColorList extends React.PureComponent {
  componentDidMount() {
    const { requestPalette } = this.props;

    requestPalette();
  }
  renderColors() {
    const { likedColors } = this.props;

    return likedColors.map((color, index) => {
      const isLastItem = likedColors.length - 1 === index;

      return <ColorItem key={index} color={color} isLastItem={isLastItem} />;
    });
  }
  renderList() {
    return (
      <div styleName="color-list">
        {this.renderColors()}
      </div>
    );
  }
  renderLoader() {
    const interfaceAttributes = getInterfaceAttributes('#222');

    return (
      <div styleName="loader-container">
        <div styleName="loader" key="loader">
          <MoonLoader color={interfaceAttributes.color} />
        </div>
      </div>
    );
  }
  render() {
    const { likedColors } = this.props;

    if (!likedColors.length) {
      return this.renderLoader();
    }

    return this.renderList();
  }
}

ColorList.propTypes = {
  likedColors: PropTypes.array.isRequired,
  requestPalette: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    likedColors: likedColorsSelector(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestPalette: () => dispatch(requestPalette()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CSSModules(ColorList, styles)
);
