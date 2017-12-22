// @flow
import styles from './GeneratorPage.css';
import CSSModules from 'react-css-modules';
import React from 'react';
import ColorList from '../ColorList/ColorList';
import { connect } from 'react-redux';
import { dislikeColor } from '../../redux/actions/dislikedColors';
import { likeColor } from '../../redux/actions/likedColors';
import lastColorInPaletteSelector from '../../redux/selectors/lastColorInPaletteSelector';
import type { ColorType } from '../../constants/FlowTypes';
import ColorItemFooter from '../ColorItem/ColorItemFooter';

type Props = {
  +lastColorInPalette: ColorType,
  +onLike: (color: ColorType) => {},
  +onDislike: (color: ColorType) => {},
  +styles: Object,
};

const L_KEYCODE = 76;
const D_KEYCODE = 68;

class GeneratorPage extends React.Component<Props> {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  getIsEventFromInput(event: KeyboardEvent) {
    const tag: string = event.target.tagName.toLowerCase();

    return tag === 'input';
  }

  handleKeydown = (event: KeyboardEvent) => {
    const { onLike, onDislike, lastColorInPalette } = this.props;
    const keycode: number = event.which;
    const isEventFromInput = this.getIsEventFromInput(event);

    if (!isEventFromInput) {
      if (keycode === L_KEYCODE) {
        console.log(lastColorInPalette);
        onLike(lastColorInPalette);
      } else if (keycode === D_KEYCODE) {
        onDislike(lastColorInPalette);
      }
    }
  };

  render() {
    const { styles } = this.props;

    return (
      <div styleName="generator-page">
        <ColorList />
        <ColorItemFooter active={true} className={styles['mobile-footer']} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    lastColorInPalette: lastColorInPaletteSelector(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLike: color => dispatch(likeColor(color)),
    onDislike: color => dispatch(dislikeColor(color)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CSSModules(GeneratorPage, styles)
);
