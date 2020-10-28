import React from 'react';
import PropTypes from 'prop-types';
import PresentationSimple from './PresentationSimple';
import LandingQuickSearch from '../../../containers/LandingQuickSearch';
import TargetPresentation from './TargetPresentation';
import PresentationDetailed from './PresentationDetailed';

import './styles.scss';
import MySpace from '../../../containers/MySpace';

const Landing = ({ isLogged }) => (
  <div className="landing__body">
    {!isLogged && (
      <>
        <PresentationSimple />
        <div className="separator" />
        <LandingQuickSearch />
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
