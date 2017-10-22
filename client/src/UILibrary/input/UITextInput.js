// @flow
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './UITextInput.css';

type Props = {
  +value: mixed,
  +onChange: () => {},
};

class UITextInput extends React.Component<Props> {
  render() {
    const { value, onChange } = this.props;
    return (
      <input
        value={value}
        onChange={onChange}
        type="text"
        styleName="uiTextInput"
      >

      </input>
    );
  }
}

export default CSSModules(UITextInput, styles);
