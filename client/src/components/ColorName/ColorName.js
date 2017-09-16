import styles from './ColorName.css';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { changeColor } from 'redux/actions/likedColors';
import getInterfaceAttributes from 'utils/getInterfaceAttributes';
import isHex from 'utils/isHex';
import Color from 'color';

class ColorName extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      shownHexCode: props.color.hexCode,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    const { shownHexCode, isEditing } = this.state;

    if (nextProps.color.hexCode !== shownHexCode && !isEditing) {
      this.setState({ shownHexCode: nextProps.color.hexCode });
    }
  }
  handleFocus() {
    this.setState({ isEditing: true });
  }
  handleChange(e) {
    const { value } = e.target;

    this.setState({ shownHexCode: value });

    if (isHex(value)) {
      this.props.onBlur(value);
    }
  }
  handleBlur(e) {
    const { color: { hexCode } } = this.props;
    const { value } = e.target;

    if (!isHex(value)) {
      return this.setState({ shownHexCode: hexCode });
    }

    this.setState({ shownHexCode: Color(value).hex() });
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
        value={shownHexCode}
        style={style}
        onFocus={this.handleFocus}
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
