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
    const { shownPalette } = this.props;

    return shownPalette.map(({ hexCode }) => {
      console.log(hexCode);
      return <ColorItem key={hexCode} hexCode={hexCode} />;
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
  shownPalette: PropTypes.array.isRequired,
  requestPalette: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    shownPalette: state.sourcePalette,
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
