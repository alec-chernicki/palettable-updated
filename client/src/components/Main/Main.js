import './Main.css';
import React, { PropTypes } from 'react';
import Title from '../Title/Title';
import ColorList from '../ColorList/ColorList';
import VisibleOnboarding from '../../containers/VisibleOnboarding';
import FooterContainer from '../../containers/FooterContainer';

const Main = ({ colors, isFetching, onboarding }) => {
  if (colors.length === 0) {
    return (
      <div className="loading-cotainer">
        <h1 className="loading">Loading</h1>
      </div>
    );
  }

  return (
    <div className="root-container">
      <div className={!onboarding.isCompleted && 'onboarding-active'}>
        <Title colors={colors} />
        <VisibleOnboarding />
        <div className="main-container">
          <ColorList colors={colors} isFetching={isFetching} />
          <FooterContainer />
        </div>
      </div>
    </div>
  );
};

Main.propTypes = {
  colors: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onboarding: PropTypes.object.isRequired,
};

export default Main;
