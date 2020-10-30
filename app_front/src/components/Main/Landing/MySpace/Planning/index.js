import React from 'react';
import PlanningDay from './PlanningDay';

import './styles.scss';

const Planning = () => {
  // Fonction pour obtenir le nom des jours en Français
  function getDayName(dateStr, locale) {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });
  }

  // Fonction pour récupérer le nom des jours de l'ordre Français
  const getDisplayDay = (day) => {
    const transformedDate = `${day.getMonth() + 1}/${day.getDate()}/${day.getFullYear()}`;
    const mealDayName = getDayName(transformedDate, 'fr-FR');
    const displayTransformedDate = `${mealDayName} - ${day.getDate()}/${day.getMonth() + 1}/${day.getFullYear()}`;
    return (displayTransformedDate);
  };

  // On créer une fonction pour renvoyer les dates sous forme JJ/MM/AAAA
  const getStateLikeDay = (day) => {
    let test;
    if (day.getDate() < 10) {
      test = true;
    }
    else {
      test = false;
    }

    let stateLikeTransformedDate;
    if (test) {
      stateLikeTransformedDate = `${day.getFullYear()}-${day.getMonth() + 1}-0${day.getDate()}`;
    }
    else {
      stateLikeTransformedDate = `${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`;
    }

    return (stateLikeTransformedDate);
  };

  const today = new Date();

  // Fonction pour incrémenter la date
  const getDay = (date, number) => {
    date.setDate(date.getDate() + number);
    return ({
      displayDay: getDisplayDay(date),
      stateLikeDay: getStateLikeDay(date),
    });
  };

  // On créer le tableau sur lequel on mapera
  const displayedDaysArray = [{
    displayDay: getDisplayDay(today),
    stateLikeDay: getStateLikeDay(today),
  }];
  for (let i = 0; i < 6; i++) {
    displayedDaysArray.push(getDay(today, 1));
  }

  console.log(displayedDaysArray);

  return (
    <div className="addmeal__container">
      <h1>Votre planning</h1>
      <div className="planning__container">
        <div className="planning__description">
          <div className="description__component">Petit-Déjeuner</div>
          <div className="description__component">Déjeuner</div>
          <div className="description__component">Dîner</div>
        </div>
        {displayedDaysArray.map((day) => (
          <PlanningDay
            displayedDay={day.displayDay}
            stateLikeDay={day.stateLikeDay}
            key={day.frenchDay}
          />
        ))}
      </div>
    </div>
  );
};

export default Planning;
