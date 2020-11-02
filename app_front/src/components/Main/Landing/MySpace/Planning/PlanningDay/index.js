import React from 'react';
import PlanningTime from '../../../../../../containers/PlanningTime';

import './styles.scss';

const PlanningDay = ({ displayedDay, stateLikeDay }) => {
  const possibleTimes = ['Petit-Déjeuner', 'Déjeuner', 'Dîner'];

  return (
    <div className="planning__day">
      <div className="planning__day__header">
        <h1>{displayedDay}</h1>
      </div>
      {possibleTimes.map((time) => (
        <div key={`${stateLikeDay} + ${time}`} className="planning__cell">
          <PlanningTime stateLikeDay={stateLikeDay} time={time} />
        </div>
      ))}
    </div>
  );
};

export default PlanningDay;
