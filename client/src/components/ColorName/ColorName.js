import styles from './ColorName.css';
import CSSModules from 'react-css-modules';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeColor } from 'redux/actions/likedColors';
import getInterfaceAttributes from 'utils/getInterfaceAttributes';
import isHex from 'utils/isHex';

class ColorName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shownHexCode: props.color.hexCode,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleChange(e) {
    this.setState({ shownHexCode: e.target.value });
  }
  handleBlur(e) {
    const { value } = e.target;

    if (!isHex(value)) {
      return;
    }

    this.props.onBlur(e.target.value);
  }
  render() {
    const { shownHexCode } = this.state;
    const { color: { hexCode } } = this.props;
    const interfaceAttributes = getInterfaceAttributes(hexCode);

    const style = {
      color: interfaceAttributes.color,
    };

    return (
      <input
        type="text"
        styleName={interfaceAttributes.className}
        value={hexCode}
        style={style}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
      />
    );
  }
}

ColorName.defaultProps = {
  onBlur: () => {},
  onChange: () => {},
};

ColorName.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  color: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch, { color }) => {
  return {
    onBlur: newHexCode => {
      dispatch(
        changeColor({
          color,
          newHexCode: newHexCode,
        })
      );
    },
  };
};

export default connect(null, mapDispatchToProps)(CSSModules(ColorName, styles));
