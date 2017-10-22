// @flow
import styles from './ExportModal.css';
import Modal from 'react-modal';
import CSSModules from 'react-css-modules';
import React from 'react';
import type { ColorType } from '../../constants/FlowTypes';
import likedColorsSelector from '../../redux/selectors/likedColorsSelector';
import { connect } from 'react-redux';
import exportOptionsConfig from './exportOptionsConfig';
import exportOptionsKeys from './exportOptionsKeys';
import Icon from 'react-icons-kit';
import { closeRound } from 'react-icons-kit/ionicons/closeRound';

type Props = {
  +likedColors: ColorType[],
  +isOpen: boolean,
  +onClose: () => {},
  +styles: Object
};

type State = {
  selectedExportOption: string
};

class ExportModal extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      selectedExportOption: exportOptionsKeys.UNSELECTED
    };
  }

  handleExportOptionClick = (exportOptionsKey) => {
    this.setState({ selectedExportOption: exportOptionsKey });
  }

  renderExportOptionButtons () {
    return Object.keys(exportOptionsConfig).map((exportOptionKey, index) => {
      const { ButtonComponent } = exportOptionsConfig[exportOptionKey];

      return (
        <ButtonComponent
          key={index}
          onClick={this.handleExportOptionClick}
        />
      );
    });
  }

  renderExportOptionsContent () {
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
        <div styleName="export-buttons">
          {this.renderExportOptionButtons()}
        </div>
      )
    }

    return this.renderExportOptionsContent();
  }

  render() {
    const { isOpen, styles, onClose } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        className={styles['export-modal-container']}
        overlayClassName={styles['export-modal-overlay']}
      >
        <div styleName="export-modal">
          <div styleName="export-modal-header">
            <h2 styleName="export-modal-title">
              How would you like to export your palette?
            </h2>
            <a styleName="close-button" onClick={onClose}>
              <Icon icon={closeRound} size={25}/>
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

const mapStateToProps = state => {
  return {
    likedColors: likedColorsSelector(state),
  };
};

export default connect(mapStateToProps, null)(
  CSSModules(ExportModal, styles)
);
