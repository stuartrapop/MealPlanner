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
        <LandingQuickSearch />
        <RolloverFoodImages />
        <TargetPresentation />
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
