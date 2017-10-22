// @flow
import React from 'react';
import type { ColorType } from '../../../constants/FlowTypes';
import UIButton from '../../../UILibrary/button/UIButton';
import exportOptionsKeys from '../exportOptionsKeys';
import UITextInput from '../../../UILibrary/input/UITextCopyInput';
import url from '../../../utils/url';

type Props = {
  +onSelectExportType: (key: string) => {},
  +likedColors: ColorType[],
};

class ExportContentUrl extends React.Component<Props> {
  handleClick = () => {
    const { onSelectExportType } = this.props;

    onSelectExportType(exportOptionsKeys.UNSELECTED);
  }

  render() {
    const { likedColors } = this.props;
    const stringifiedColors = url.stringifyColors(likedColors);

    return (
      <div>
        <p>
          Success url
        </p>
        <UITextInput value={stringifiedColors}/>
        <UIButton onClick={this.handleClick}>
          Back to export options
        </UIButton>
      </div>
    );
  }
}

export default ExportContentUrl;
