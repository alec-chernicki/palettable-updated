// @flow
import styles from './ExportModal.css';
import Modal from 'react-modal';
import CSSModules from 'react-css-modules';
import React from 'react';
import type { ColorType, ReduxStore } from '../../constants/FlowTypes';
import likedColorsSelector from '../../redux/selectors/likedColorsSelector';
import { connect } from 'react-redux';
import exportOptionsConfig from './exportOptionsConfig';
import exportOptionsKeys from './exportOptionsKeys';
import CloseIcon from 'react-icons/lib/md/clear';

type Props = {
  +likedColors: ColorType[],
  +isOpen: boolean,
  +onClose: () => {},
  +styles: Object,
};

type State = {
  selectedExportOption: string,
};

class ExportModal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      selectedExportOption: exportOptionsKeys.UNSELECTED,
    };
  }

  handleExportOptionClick = exportOptionsKey => {
    this.setState({ selectedExportOption: exportOptionsKey });
  };

  renderExportOptionButtons() {
    return Object.keys(exportOptionsConfig).map((exportOptionKey, index) => {
      const { ButtonComponent } = exportOptionsConfig[exportOptionKey];

      return (
        <ButtonComponent key={index} onClick={this.handleExportOptionClick} />
      );
    });
  }

  renderExportOptionsContent() {
    const { selectedExportOption } = this.state;
    const { likedColors } = this.props;
    const { ContentComponent } = exportOptionsConfig[selectedExportOption];

    return (
      <ContentComponent
        likedColors={likedColors}
        onSelectExportType={this.handleExportOptionClick}
      />
    );
  }

  renderExportOptions() {
    const { selectedExportOption } = this.state;

    if (selectedExportOption === exportOptionsKeys.UNSELECTED) {
      return (
        <div styleName="export-buttons">{this.renderExportOptionButtons()}</div>
      );
    }

    return this.renderExportOptionsContent();
  }

  render() {
    const { styles, onClose } = this.props;

    return (
      <Modal
        isOpen={true}
        className={styles['export-modal-container']}
        closeTimeoutMS={200}
      >
        <div styleName="export-modal">
          <div styleName="export-modal-header">
            <h2 styleName="export-modal-title">
              How would you like to export your palette?
            </h2>
            <a styleName="close-button" onClick={onClose}>
              <CloseIcon size={32} color="#FFF" />
            </a>
          </div>
          <div styleName="export-modal-content">
            {this.renderExportOptions()}
          </div>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state: ReduxStore) => {
  return {
    likedColors: likedColorsSelector(state),
  };
};

export default connect(mapStateToProps, null)(CSSModules(ExportModal, styles));
