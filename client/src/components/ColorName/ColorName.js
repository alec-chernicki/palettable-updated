// @flow
import styles from './ColorName.css';
import CSSModules from 'react-css-modules';
import React from 'react';
import { connect } from 'react-redux';
import { changeLikedColor } from '../../redux/actions/likedColors';
import getInterfaceAttributes from '../../utils/getInterfaceAttributes';
import isHex from '../../utils/isHex';
import Color from 'color';
import type { ColorType } from '../../constants/FlowTypes';

type Props = {
  color: ColorType,
  onBlur: (hexCode: string) => mixed,
};

type State = {
  isEditing: boolean,
  shownHexCode: string,
};

class ColorName extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      shownHexCode: props.color.hexCode,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { shownHexCode, isEditing } = this.state;

    if (nextProps.color.hexCode !== shownHexCode && !isEditing) {
      this.setState({ shownHexCode: nextProps.color.hexCode });
    }
  }

  handleFocus = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ isEditing: true });
  }

  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const { value } = e.target;

    this.setState({ shownHexCode: value });

    if (isHex(value)) {
      this.props.onBlur(value);
    }
  }

  handleBlur = (e: SyntheticInputEvent<HTMLInputElement>) => {
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

const mapDispatchToProps = (dispatch, { color }) => {
  return {
    onBlur: (newHexCode: string) => {
      dispatch(
        changeLikedColor({
          color,
          newHexCode: newHexCode,
        })
      );
    },
  };
};

export default connect(null, mapDispatchToProps)(CSSModules(ColorName, styles));
