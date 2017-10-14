// @flow
import styles from './ExportPage.css';
import CSSModules from 'react-css-modules';
import UISelectableButton from '../../UILibrary/button/UISelectableButton';
import React from 'react';
import FaFilePdfO from 'react-icons/lib/fa/file-pdf-o';
import FaImage from 'react-icons/lib/fa/image';
import FaChain from 'react-icons/lib/fa/chain';
import { connect } from 'react-redux';
import likedColorsSelector from '../../redux/selectors/likedColorsSelector';
import type { ColorType } from '../../constants/FlowTypes';

type Props = {
  likedColors: ColorType[]
};

class ExportPage extends React.Component<Props> {
  renderBackground() {
    const { likedColors } = this.props;

    return likedColors.map((likedColor, index) => {
      return (
        <div
          key={index}
          style={{ backgroundColor: likedColor.hexCode}}
          styleName="background-item"
        />
      )
    });
  }

  render() {
    return (
      <div styleName="export-page">
        <div styleName="background-container">
          { this.renderBackground() }
        </div>
        <div styleName="content-container">
          <div>
            <h2>How would you like to export your palette?</h2>
            <div styleName="export-buttons">
              <UISelectableButton icon={FaChain}>URL</UISelectableButton>
              <UISelectableButton icon={FaImage}>PNG</UISelectableButton>
              <UISelectableButton icon={FaFilePdfO}>PDF</UISelectableButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    likedColors: likedColorsSelector(state),
  };
};

export default connect(mapStateToProps, null)(
  CSSModules(ExportPage, styles)
);
