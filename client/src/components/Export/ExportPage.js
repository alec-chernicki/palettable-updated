import styles from './ExportPage.css';
import CSSModules from 'react-css-modules';
import UISelectableButton from 'UILibrary/button/UISelectableButton';
import React from 'react';
import { URL_ICON } from 'constants/images';
import FaFilePdfO from 'react-icons/lib/fa/file-pdf-o';
import FaImage from 'react-icons/lib/fa/image';
import FaChain from 'react-icons/lib/fa/chain';

class ExportPage extends React.Component {
  render() {
    return (
      <div styleName="export-page">
        <div>
          <h2>How would you like to export your palette?</h2>
          <div styleName="export-buttons">
            <UISelectableButton icon={FaChain}>URL</UISelectableButton>
            <UISelectableButton icon={FaImage}>PNG</UISelectableButton>
            <UISelectableButton icon={FaFilePdfO}>PDF</UISelectableButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CSSModules(ExportPage, styles);
