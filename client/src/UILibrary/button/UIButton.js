// @flow
import * as React from 'react';
import CSSModules from 'react-css-modules';
import styles from './UIButton.css';
import classNames from 'classnames';
import { Link } from 'react-router';

const LinkOriginal = props => <a {...props} />;
const LinkWithRouter = props => <Link {...props} />;

const useProps = {
  primary: 'primary',
  positive: 'positive',
  negative: 'negative',
};

type Props = {
  +children: React.Node,
  +onClick: () => mixed,
  +className: string,
  +use: 'primary' | 'positive' | 'negative',
  +href: string,
  +to: string,
};

class UIButton extends React.Component<Props> {
  static defaultProps = {
    use: useProps.primary,
  };

  render() {
    const { children, onClick, className, use, href, to, style } = this.props;
    const componentClass = classNames({
      primary: use === useProps.primary,
      positive: use === useProps.positive,
      negative: use === useProps.negative,
    });

    const ComponentToRender = to ? LinkWithRouter : LinkOriginal;

    return (
      <ComponentToRender
        style={style}
        onClick={onClick}
        styleName={componentClass}
        className={className}
        href={href}
        to={to}
      >
        {children}
      </ComponentToRender>
    );
  }
}

export default CSSModules(UIButton, styles);
