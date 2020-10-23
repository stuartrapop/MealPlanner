import React from 'react';
import { Icon, Button, Dropdown } from 'semantic-ui-react';
// import AddMealModal from './AddMealModal';
import AddMealModal from './AddMealModal';
import './styles.scss';

const AddMeal = ({
  userInfos, activeGroup, chooseGroup, sendAddMealModalAction, mealModalDisplayed,
}) => {
  const groupOptions = userInfos.groups.map((group) => ({
    key: group.id,
    text: group.name,
    value: group.id,
  }));

  const meals = userInfos.groups[activeGroup].meals.map((meal) => ({
    key: meal.id,
    mealDate: meal.day,
    mealType: meal.time,
    slug: `${meal.day} ${meal.time}`,
    scheduledRecipes: meal.recipes,
  }));

  const handleChooseGroup = (evt) => {
    const isTargetedGroup = (group) => (group.name === evt.target.textContent);
    const targetedGroup = userInfos.groups.find(isTargetedGroup);
    console.log(targetedGroup);
    // il s'agit du groupe, il nous faut maintenant son index dans le tableau
    const targetedGroupIndex = userInfos.groups.findIndex(isTargetedGroup);
    chooseGroup(targetedGroupIndex);
  };

  const toggleAddMealModal = () => {
    sendAddMealModalAction();
  };

  return (
    <div className="addmeal__container">
      <h1>Vos repas prévus</h1>
      <div className="addmeal__body">
        <div>
          <ul className="scheduled__meals__container">
            <div className="add__meal__container">
              <div className="add__meal--left" onClick={toggleAddMealModal}>
                <Icon id="add__meal__icon" name="plus square outline" size="large" />
                Ajouter un créneau
              </div>
              <div className="add__meal--right">
                <Dropdown placeholder="Groupe" fluid selection options={groupOptions} onChange={handleChooseGroup} />
              </div>
            </div>
            {meals.map((meal) => (
              <div key={meal.key}>
                <Icon id="remove__meal__icon" name="trash alternate outline" /> <em>{meal.slug}</em>
                <ul className="scheduled__meal">
                  <li className="scheduled__recipe"> <Icon id="add__meal__icon" name="plus" /></li>
                  {meal.scheduledRecipes.map((recipe) => (
                    <div key={recipe.id + meal.mealDate}>
                      <li className="scheduled__recipe"> <Icon id="remove__meal__icon" name="minus" />
                        {recipe.title} - <i>{recipe.number_people} personnes </i>
                      </li>
                    </div>
                  ))}
                  <div className="recipe__small__separator" />
                </ul>
              </div>
            ))}
          </ul>
        </div>
        <div className="advanced__search__access">
          <h2> En manque d'inspiration ?</h2>
          <Button inverted color="orange">Parcourir les recettes !</Button>
        </div>
      </div>
      {mealModalDisplayed && (
        <AddMealModal />
      )}
    </div>
  );
};

export default AddMeal;
