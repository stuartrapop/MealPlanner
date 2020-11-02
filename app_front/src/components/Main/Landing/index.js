import React from 'react';
import PropTypes from 'prop-types';
import PresentationSimple from './PresentationSimple';
import LandingQuickSearch from '../../../containers/LandingQuickSearch';
import TargetPresentation from './TargetPresentation';
import PresentationDetailed from '../../../containers/PresentationDetailed';

import './styles.scss';
import MySpace from '../../../containers/MySpace';
import RolloverFoodImages from './RolloverFoodImages';

const Landing = ({ isLogged }) => (
  <div className="landing__body">
    {!isLogged && (
      <>
        <PresentationSimple />
        <div className="separator" />
        <LandingQuickSearch />
        <div className="separator" />
        <RolloverFoodImages />
        <div className="separator" />
        <TargetPresentation />
        <div className="separator" />
        <PresentationDetailed />
      </>
    )}
    {isLogged && (
      <MySpace />
    )}
  </div>
);

Landing.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default Landing;
