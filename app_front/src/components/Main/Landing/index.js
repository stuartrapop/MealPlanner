import React from 'react';
import PresentationSimple from './PresentationSimple';
import LandingQuickSearch from './LandingQuickSearch';
import TargetPresentation from './TargetPresentation';
import PresentationDetailed from './PresentationDetailed';

import './styles.scss';

const Landing = () => (
  <div className="landing__body">
    <PresentationSimple />
    <div className="separator" />
    <LandingQuickSearch />
    <div className="separator" />
    <TargetPresentation />
    <div className="separator" />
    <PresentationDetailed />
  </div>
);

export default Landing;
