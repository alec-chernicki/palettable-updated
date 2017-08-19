import styles from './ColorName.css';
import CSSModules from 'react-css-modules';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeLikedColor } from 'redux/actions/likedColors';
import getInterfaceAttributes from 'utils/getInterfaceAttributes';

class ColorName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shownColor: props.hexCode,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleChange(e) {
    this.setState({
      shownColor: e.target.value,
    });
  }
  handleBlur(e) {
    this.props.onBlur(e.target.value);
  }
  render() {
    const { shownColor } = this.state;
    const { hexCode } = this.props;
    const interfaceAttributes = getInterfaceAttributes(hexCode);

    const style = {
      color: interfaceAttributes.color,
    };

    return (
      <input
        type="text"
        styleName={interfaceAttributes.className}
        value={shownColor}
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
  hexCode: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch, { hexCode }) => {
  return {
    onBlur: newHexCode => {
      dispatch(
        changeLikedColor({
          oldHexCode: hexCode,
          newHexCode: newHexCode,
        })
      );
    },
  };
};

export default connect(null, mapDispatchToProps)(CSSModules(ColorName, styles));
