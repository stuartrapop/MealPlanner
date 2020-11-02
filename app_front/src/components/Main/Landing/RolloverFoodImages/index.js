/* eslint-disable max-len */
import React from 'react';

import './styles.scss';

const RolloverFoodImages = () => {
  console.log('');

  return (
    <div className="rollover">

      <section className="hero">
        <div className="hero-inner" id="section-1">
          <figure className="hero__image" />
          <h2 className="hero__title" />
        </div>
        <div className="hero-inner" id="section-2">
          <figure className="hero__image" />
          <h2 className="hero__title" />
        </div>
        <div className="hero-inner" id="section-3">
          <figure className="hero__image" />
          <h2 className="hero__title" />
        </div>
        <div className="hero-inner" id="section-4">
          <figure className="hero__image" />
          <h2 className="hero__title" />
        </div>

      </section>

    </div>
  );
};

export default RolloverFoodImages;
