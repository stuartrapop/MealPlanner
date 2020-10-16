import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

import './styles.scss';

const PresentationDetailed = () => (
  <section className="presentation__detailed">
    <h1>Comment ça marche ?</h1>
    <div className="presentation__steps">
      <Step1 />
      <Step2 />
      <Step3 />
    </div>
  </section>
);

export default PresentationDetailed;
