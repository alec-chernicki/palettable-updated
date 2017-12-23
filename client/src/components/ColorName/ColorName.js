// @flow
import styles from './ColorName.css';
import CSSModules from 'react-css-modules';
import React from 'react';
import { connect } from 'react-redux';
import { changeLikedColor } from '../../redux/actions/likedColors';
import getInterfaceAttributes from '../../utils/getInterfaceAttributes';
import isHex from '../../utils/isHex';
import Color from 'color';

type Props = {
  color: ColorType,
  onBlur: (hexCode: string) => mixed,
};

type State = {
  isEditing: boolean,
  shownHexCode: string,
};

const _formatToHashedString = (hexCode: string): string => {
  if (hexCode[0] !== '#') {
    return `#${hexCode}`;
  }

  return hexCode;
};

class ColorName extends React.Component<Props, State> {
  constructor(props: Props) {
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

  handleFocus = e => {
    this.setState({ isEditing: true });
  };

  handleChange = e => {
    const { value }: { value: string } = e.target;
    const formattedValue = _formatToHashedString(value);

    this.setState({ shownHexCode: value });

    if (isHex(formattedValue)) {
      this.props.onBlur(formattedValue);
    }
  };

  handleBlur = e => {
    const { color: { hexCode } } = this.props;
    const { value }: { value: string } = e.target;
    const formattedValue = _formatToHashedString(value);

    if (!isHex(formattedValue)) {
      return this.setState({ shownHexCode: hexCode });
    }

    this.setState({ shownHexCode: Color(formattedValue).hex() });
    this.props.onBlur(formattedValue);
  };

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

const mapDispatchToProps = (dispatch, { color }: Props) => {
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
