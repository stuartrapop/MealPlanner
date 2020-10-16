import React from 'react';
import PlanningDay from './PlanningDay';

import './styles.scss';

const Planning = () => (
  <div className="addmeal__container">
    <h1>Votre planning</h1>
    <div className="planning__container">
      <PlanningDay day="Lundi" date="13/10" />
      <PlanningDay day="Mardi" date="14/10" />
      <PlanningDay day="Mer." date="15/10" />
      <PlanningDay day="Jeudi" date="16/10" />
      <PlanningDay day="Ven." date="17/10" />
      <PlanningDay day="Samedi" date="18/10" />
      <PlanningDay day="Dim." date="19/10" />
    </div>
  </div>
);

export default Planning;
