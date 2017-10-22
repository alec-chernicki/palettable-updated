// @flow
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './UITextCopyInput.css';

type Props = {
  +value: mixed,
  +onChange: () => {},
};

class UITextCopyInput extends React.Component<Props> {
  render() {
    const { value, onChange } = this.props;
    return (
      <input
        value={value}
        onChange={onChange}
        type="text"
        styleName="uiTextCopyInput"
      >

      </input>
    );
  }
}

export default CSSModules(UITextCopyInput, styles);
