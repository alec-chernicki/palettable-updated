import styles from './RemoveTool.css';
import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import { removeLikedColor } from 'redux/actions/likedColors';
import images from 'constants/images';

const RemoveTool = ({ onClick }) => {
  return <img onClick={onClick} src={images.delete} styleName="remove-tool" />;
};

RemoveTool.propTypes = {
  hexCode: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch, { hexCode }) => {
  return {
    onClick: () => dispatch(removeLikedColor(hexCode)),
  };
};

export default connect(null, mapDispatchToProps)(
  CSSModules(RemoveTool, styles)
);
