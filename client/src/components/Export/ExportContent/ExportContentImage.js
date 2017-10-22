// @flow
import React from 'react';
import type { ColorType } from '../../../constants/FlowTypes';
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
  }

  render() {
    return (
      <div>
        <p>
          Success url
        </p>
        <UIButton onClick={this.handleClick}>
          Back to export options
        </UIButton>
      </div>
    );
  }
}

export default ExportContentImage;
