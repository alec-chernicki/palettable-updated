// @flow
import React from 'react';
import type { ColorType } from '../../../constants/FlowTypes';
import UIButton from '../../../UILibrary/button/UIButton';
import exportOptionsKeys from '../exportOptionsKeys';
import UITextInput from '../../../UILibrary/input/UITextCopyInput';
import url from '../../../utils/url';
import { baseUrl } from '../../../constants/links';

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
    const linkableUrl = baseUrl(stringifiedColors);

    return (
      <div>
        <p>
          Return to this url to continue editing your current color palette.
        </p>
        <UITextInput value={linkableUrl}/>
        <UIButton onClick={this.handleClick}>
          Back to export options
        </UIButton>
      </div>
    );
  }
}

export default ExportContentUrl;
