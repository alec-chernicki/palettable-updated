// @flow
import * as React from 'react';
import CSSModules from 'react-css-modules';
import styles from './UISelectableButton.css';

type Props = {
  +icon: string,
  +children: React.Node,
  +onClick: () => mixed,
  +className: string,
  +href: string,
  +styles: Object,
  +type: string,
};

class UISelectableButton extends React.Component<Props> {
  renderImage() {
    const { icon, styles } = this.props;
    const IconEl = icon;

    if (!icon) {
      return null;
    }

    return <IconEl size={45} className={styles['icon']} />;
  }

  render() {
    const { children, onClick, className, href, type } = this.props;

    return (
      <a
        type={type}
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
