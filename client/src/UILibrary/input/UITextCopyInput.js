// @flow
import React from 'react';
import keyMirror from 'keymirror';
import CSSModules from 'react-css-modules';
import styles from './UITextCopyInput.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const DISPLAY_STATES = keyMirror({
  INACTIVE: null,
  ACTIVE: null,
});

const ACTIVE_STATE_DURATION = 1250;

type Props = {
  +value: mixed,
  +onChange: () => {},
};

type State = {
  displayState: 'INACTIVE' | 'ACTIVE',
};

class UITextCopyInput extends React.Component<Props, State> {
  state = {
    displayState: DISPLAY_STATES.INACTIVE,
  };

  static defaultProps = {
    onChange: () => {},
  };

  handleClick = () => {
    this.setState({ displayState: DISPLAY_STATES.ACTIVE });

    setTimeout(() => {
      this.setState({ displayState: DISPLAY_STATES.INACTIVE });
    }, ACTIVE_STATE_DURATION);
  };

  render() {
    const { displayState } = this.state;
    const { value, onChange } = this.props;
    const buttonCopy =
      displayState === DISPLAY_STATES.INACTIVE ? 'Copy' : 'Copied';

    return (
      <div styleName="text-copy-input-container">
        <input
          value={value}
          onChange={onChange}
          type="text"
          styleName="text-copy-input"
        />
        <CopyToClipboard text={value}>
          <button onClick={this.handleClick} styleName="copy-button">
            {buttonCopy}
          </button>
        </CopyToClipboard>
      </div>
    );
  }
}

export default CSSModules(UITextCopyInput, styles);
