// @flow
import React from 'react';
import UIButton from '../../../UILibrary/button/UIButton';
import exportOptionsKeys from '../exportOptionsKeys';

type Props = {
  +onSelectExportType: (key: string) => {},
  +likedColors: ColorType[],
};

class ExportContentImage extends React.Component<Props> {
  handleClick = () => {
    const { onSelectExportType } = this.props;

    onSelectExportType(exportOptionsKeys.UNSELECTED);
  };

  render() {
    const buttonStyle = {
      maxWidth: '200px',
    };

    return (
      <div>
        <p>Your download should begin shortly.</p>
        <UIButton style={buttonStyle} onClick={this.handleClick}>
          Back to export options
        </UIButton>
      </div>
    );
  }
}

export default ExportContentImage;
