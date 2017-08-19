import styles from './ColorList.css';
import CSSModules from 'react-css-modules';
import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { requestPalette } from 'redux/actions/dataStatus';
import ColorItem from 'components/ColorItem/ColorItem';

class ColorList extends React.Component {
  componentDidMount() {
    const { requestPalette } = this.props;

    requestPalette();
  }
  renderColors() {
    const { likedColors } = this.props;

    return likedColors.map((hexCode, index) => {
      const isLastItem = likedColors.length - 1 === index;

      return (
        <ColorItem key={index} hexCode={hexCode} isLastItem={isLastItem} />
      );
    });
  }
  render() {
    return (
      <ReactCSSTransitionGroup
        component="ul"
        styleName="color-list"
        transitionName={'color-animation'}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={350}
      >
        {this.renderColors()}
      </ReactCSSTransitionGroup>
    );
  }
}

ColorList.propTypes = {
  likedColors: PropTypes.array.isRequired,
  requestPalette: PropTypes.func.isRequired,
};

const mapStateToProps = ({ likedColors }) => {
  return {
    likedColors,
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
