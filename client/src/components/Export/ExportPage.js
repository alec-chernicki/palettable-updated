// @flow
import styles from './ExportPage.css';
import CSSModules from 'react-css-modules';
import UISelectableButton from '../../UILibrary/button/UISelectableButton';
import React from 'react';
import FaImage from 'react-icons/lib/fa/image';
import FaFilePdfO from 'react-icons/lib/fa/file-pdf-o';
import FaChain from 'react-icons/lib/fa/chain';
import type { ColorType } from '../../constants/FlowTypes';
import likedColorsSelector from '../../redux/selectors/likedColorsSelector';
import { connect } from 'react-redux';
import url from '../../utils/url';
import ExportButtonPng from './ExportButtons/ExportButtonPng';

type Props = {
  +likedColors: ColorType[]
};

const IMAGE_ENDPOINT = '/api/image';

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
    const { likedColors } = this.props;
    const stringifiedColors = url.stringifyColors(likedColors);

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
              <ExportButtonPng />
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
