import styles from './ExportPage.css';
import CSSModules from 'react-css-modules';
import UISelectableButton from 'UILibrary/button/UISelectableButton';
import React from 'react';
import { URL_ICON } from 'constants/images';

class ExportPage extends React.Component {
  render() {
    return (
      <div styleName="export-page">
        <div>
          <h2>How would you like to export your palette?</h2>
          <div styleName="export-buttons">
            <UISelectableButton image={URL_ICON}>URL</UISelectableButton>
            <UISelectableButton image={URL_ICON}>PNG</UISelectableButton>
            <UISelectableButton image={URL_ICON}>PDF</UISelectableButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CSSModules(ExportPage, styles);
