import React from 'react';
import { Icon } from 'semantic-ui-react';

import './styles.scss';

const PlanningDay = ({ day, date }) => (
  <div className="planning__day">
    <div className="planning__day__header">
      <h1>{day}</h1>
      <h2>{date}</h2>
    </div>
    <div className="planning__day__box validated"> <p>Repas prévu</p> </div>
    <div className="planning__day__box"> <Icon id="add__meal__onplanning" name="plus" size="large" /> </div>
    <div className="planning__day__box"> <Icon id="add__meal__onplanning" name="plus" size="large" /> </div>
  </div>
);

export default PlanningDay;
