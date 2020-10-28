import React from 'react';

import './styles.scss';

const PlanningTime = ({
  time, stateLikeDay, userInfos, activeGroup,
}) => {
  console.log('combinaison unique: ', stateLikeDay, time);
  // On a donc quelque chose comme Petit-Déjeuner 2020-10-26
  // Il faut maintenant vérifier si ce meal est présent dans le state
  // eslint-disable-next-line max-len
  const dayIsIncluded = userInfos.groups[activeGroup].meals.filter((meal) => meal.day === stateLikeDay);
  const mealIsIncluded = dayIsIncluded.some((element) => element.time === time);
  const includedMealContent = dayIsIncluded.find((element) => element.time === time);
  return (
    <>
      {mealIsIncluded && (
      <div className="planning__day__box--found">
        <ul className="found__recipes">
          {includedMealContent.recipes.map((recipe) => (
            <li key={`${recipe.id}${stateLikeDay}`}>{recipe.title}</li>
          ))}
        </ul>
      </div>
      )}
      {!mealIsIncluded && (
      <div className="planning__day__box"> </div>
      )}
    </>
  );
};

export default PlanningTime;
