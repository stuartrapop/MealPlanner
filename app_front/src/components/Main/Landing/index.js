import React from 'react';
import PresentationSimple from './PresentationSimple';
import LandingQuickSearch from './LandingQuickSearch';

import './styles.scss';

const Landing = () => (
  <div className="landing__body">
    <PresentationSimple />
    <div className="separator" />
    <LandingQuickSearch />
  </div>
);

export default Landing;
