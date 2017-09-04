import React, { PropTypes } from 'react';
import { partial } from 'lodash';
import { Manager, Target, Popper, Arrow } from 'react-popper';

const placementProps = ['top', 'bottom', 'left', 'right'];

class UIPopover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: props.isActive,
    };

    this.setIsActive = this.setIsActive.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', partial(this.setIsActive, false));
  }

  setIsActive(isActive) {
    this.setState({ isActive });
  }

  render() {
    const { children, placement } = this.props;

    return (
      <Manager>
        <Target>
          {children}
        </Target>
        <Popper placement={placement}>
          <Arrow />
        </Popper>
      </Manager>
    );
  }
}

UIPopover.defaultProps = {
  isActive: false,
};

UIPopover.propTypes = {
  id: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  placement: PropTypes.oneOf(placementProps),
  children: PropTypes.node.isRequired,
};

export default UIPopover;
