import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { removeLikedColor } from 'redux/actions/likedColors';

const RemoveTool = ({ onClick }) => {
  return <a onClick={onClick}>X</a>;
};

RemoveTool.propTypes = {
  hexCode: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch, { hexCode }) => {
  return {
    onClick: () => dispatch(removeLikedColor(hexCode)),
  };
};

export default connect(null, mapDispatchToProps)(RemoveTool);
