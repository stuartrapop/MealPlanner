/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button, Dropdown } from 'semantic-ui-react';
// import AddMealModal from './AddMealModal';
import AddMealModal from '../../../../../containers/AddMealModal';
import './styles.scss';

const AddMeal = ({
  userInfos, activeGroup, choosenGroup, sendAddMealModalAction, mealModalDisplayed,
}) => {
  const groupOptions = userInfos.groups.map((group) => ({
    key: group.id,
    text: group.name,
    value: group.id,
  }));

  function getDayName(dateStr, locale) {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });
  }

  const getDisplayedDate = (serverDate) => {
    const transformedDate = new Date(serverDate.replace('-', '/'));
    const secondTransformedDate = `${transformedDate.getMonth() + 1}/${transformedDate.getDate()}/${transformedDate.getFullYear()}`;
    const mealDayName = getDayName(secondTransformedDate, 'fr-FR');
    const frenchTransformedDate = `${transformedDate.getDate()}/${transformedDate.getMonth() + 1}/${transformedDate.getFullYear()}`;
    return (`${mealDayName} - ${frenchTransformedDate}`);
  };

  const { meals } = userInfos.groups[activeGroup];

  // On commence par en faire une copie avec des dates format date
  const mealsConvertedToDate = meals.map((meal) => ({
    id: meal.id,
    day: new Date(meal.day.replace('-', '/')),
    time: meal.time,
    recipes: meal.recipes,
    displayedDate: `${getDisplayedDate(meal.day)} - ${meal.time}`,
  }));

  // On créer un tableau en modifiant les dates en fonction des times
  const mealsConvertedToDateImproved = mealsConvertedToDate.map((meal) => {
    if (meal.time === 'Déjeuner') {
      return {
        key: meal.id,
        mealDate: meal.day.setHours(meal.day.getHours() + 12),
        mealType: meal.time,
        scheduledRecipes: meal.recipes,
        displayedDate: meal.displayedDate,
      };
    }
    if (meal.time === 'Dîner') {
      return {
        key: meal.id,
        mealDate: meal.day.setHours(meal.day.getHours() + 19),
        mealType: meal.time,
        scheduledRecipes: meal.recipes,
        displayedDate: meal.displayedDate,
      };
    }
    return {
      key: meal.id,
      mealDate: meal.day.setHours(meal.day.getHours() + 0),
      mealType: meal.time,
      scheduledRecipes: meal.recipes,
      displayedDate: meal.displayedDate,
    };
  });

  // fonction servant à ranger les dates
  const compare = (a, b) => {
    const date1 = a.mealDate;
    const date2 = b.mealDate;
    let comparison = 0;
    if (date1 > date2) {
      comparison = 1;
    }
    else if (date1 < date2) {
      comparison = -1;
    }
    return comparison;
  };
  // On trie désormais le tableau par date la plus proche de maintenant
  const sortedMealsArray = mealsConvertedToDateImproved.sort(compare);
  console.log('sortedMealsArray :', sortedMealsArray);

  const handleChooseGroup = (evt) => {
    const isTargetedGroup = (group) => (group.name === evt.target.textContent);
    const targetedGroup = userInfos.groups.find(isTargetedGroup);
    const targetedGroupId = targetedGroup;
    // il s'agit du groupe, il nous faut maintenant son index dans le tableau
    const targetedGroupIndex = userInfos.groups.findIndex(isTargetedGroup);
    choosenGroup(targetedGroupIndex, targetedGroupId);
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
            {sortedMealsArray.map((meal) => (
              <div key={meal.key}>
                <Icon id="remove__meal__icon" name="trash alternate outline" /> <em>{meal.displayedDate}</em>
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

AddMeal.propTypes = {
  userInfos: PropTypes.shape({
    userId: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    userName: PropTypes.string,
    groups: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  activeGroup: PropTypes.number.isRequired,
  choosenGroup: PropTypes.func.isRequired,
  sendAddMealModalAction: PropTypes.func.isRequired,
  mealModalDisplayed: PropTypes.bool.isRequired,
};

export default AddMeal;
