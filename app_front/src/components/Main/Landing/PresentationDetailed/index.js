import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
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
    <h2>Alors, envie de devenir maitre de l'organisation ?</h2>
    <div className="call__to__action">
      <Button size="massive" inverted animated>
        <Button.Content visible>S'inscrire</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
    </div>
  </section>
);

export default PresentationDetailed;