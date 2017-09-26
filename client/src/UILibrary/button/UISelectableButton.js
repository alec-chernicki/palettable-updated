// @flow
import * as React from 'react';
import CSSModules from 'react-css-modules';
import styles from './UISelectableButton.css';

type Props = {
  +image: string,
  +children: React.Node,
  +onClick: () => mixed,
  +className: string,
  +href: string,
};

class UISelectableButton extends React.Component<Props> {
  renderImage() {
    const { image } = this.props;

    if (!image) {
      return null;
    }

    return <img styleName="image" alt="" src={image} />;
  }

  render() {
    const { children, onClick, className, href } = this.props;

    return (
      <a
        styleName="selectable-button"
        onClick={onClick}
        className={className}
        href={href}
      >
        {this.renderImage()}
        {children}
      </a>
    );
  }
}

export default CSSModules(UISelectableButton, styles);
