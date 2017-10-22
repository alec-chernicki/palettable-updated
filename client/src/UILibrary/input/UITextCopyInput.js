// @flow
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './UITextCopyInput.css';
import UITextInput from './UITextInput';
import {CopyToClipboard} from 'react-copy-to-clipboard';

type Props = {
  +value: mixed,
  +onChange: () => {},
};

class UITextCopyInput extends React.Component<Props> {
  static defaultProps = {
    onChange: () => {},
  }

  render() {
    const { value, onChange } = this.props;
    return (
      <div styleName="text-copy-input">
        <UITextInput value={value} onChange={onChange} />
        <CopyToClipboard text={value}>
          <button styleName="copy-button">Copy</button>
        </CopyToClipboard>
      </div>
    );
  }
}

export default CSSModules(UITextCopyInput, styles);
