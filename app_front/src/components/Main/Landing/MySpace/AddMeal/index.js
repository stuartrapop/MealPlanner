import React from 'react';
import { Icon, Button, Dropdown } from 'semantic-ui-react';
// import AddMealModal from './AddMealModal';

import './styles.scss';

const AddMeal = ({ groups }) => {
  const groupOptions2 = groups.groups.map((group) => ({
    key: group.id,
    text: group.name,
    value: group.name,
  }));

  let meals;
  for (let i = 0; i < groups.groups.length; i++) {
    meals = groups.groups[i].meals.map((meal) => ({
      key: meal.id,
      mealDate: meal.day,
      mealType: meal.time,
      slug: `${meal.day} ${meal.time}`,
      scheduledRecipes: meal.recipes,
    }));
  }

  return (
    <div className="addmeal__container">
      <h1>Vos repas prévus</h1>
      <div className="addmeal__body">
        <div>
          <ul className="scheduled__meals__container">
            <div className="add__meal__container">
              <div className="add__meal--left">
                <Icon id="add__meal__icon" name="plus circle" size="large" />
                Ajouter un créneau
              </div>
              <div className="add__meal--right">
                <Dropdown placeholder="Ardèche" fluid selection options={groupOptions2} />
              </div>
            </div>
            {meals.map((meal) => (
              <ul className="scheduled__meal">{meal.slug}
                <li className="scheduled__recipe"> <Icon id="add__meal__icon" name="plus circle" /> Ajouter une recette</li>
                {meal.scheduledRecipes.map((recipe) => (
                  <>
                    <li className="scheduled__recipe"> <Icon id="remove__meal__icon" name="minus circle" />
                      {recipe.title} <br /> {recipe.number_people} personnes
                    </li>
                  </>
                ))}
              </ul>
            ))}
          </ul>
        </div>
        <div className="advanced__search__access">
          <h2> En manque d'inspiration ?</h2>
          <Button inverted color="orange">Parcourir les recettes !</Button>
        </div>
      </div>
    </div>
  );
};

export default AddMeal;
