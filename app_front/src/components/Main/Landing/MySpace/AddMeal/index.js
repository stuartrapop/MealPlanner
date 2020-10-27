/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon, Button, Dropdown } from 'semantic-ui-react';
// import AddMealModal from './AddMealModal';
import AddMealModal from '../../../../../containers/AddMealModal';
import AddRecipeZone from '../../../../../containers/AddRecipeZone';

import './styles.scss';

const AddMeal = ({
  userInfos, activeGroup, choosenGroup, sendAddMealModalAction, mealModalDisplayed, sendRemoveMealAction, groupValueDropdown, sendRemoveRecipeAction,
}) => {
  const groupOptionsConstructor = userInfos.groups.map((group) => ({
    key: group.id,
    text: group.name,
    value: group.name,
  }));

  const lowestIdFirstSort = (a, b) => (a.key - b.key);
  const groupOptions = groupOptionsConstructor.sort(lowestIdFirstSort);

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

  const getFrenchizedDay = (day) => {
    const transformedDate = new Date(day.replace('-', '/'));
    const frenchTransformedDate = `${transformedDate.getDate()}/${transformedDate.getMonth() + 1}/${transformedDate.getFullYear()}`;
    return (frenchTransformedDate);
  };

  const { meals } = userInfos.groups[activeGroup];

  // On commence par en faire une copie avec des dates format date
  const mealsConvertedToDate = meals.map((meal) => ({
    id: meal.id,
    day: meal.day,
    date: new Date(meal.day.replace('-', '/')),
    time: meal.time,
    recipes: meal.recipes,
    displayedDate: `${getDisplayedDate(meal.day)}`,
  }));

  // On créer un tableau en modifiant les dates en fonction des times
  const mealsConvertedToDateImproved = mealsConvertedToDate.map((meal) => {
    if (meal.time === 'Déjeuner') {
      return {
        key: meal.id,
        mealDay: getFrenchizedDay(meal.day),
        mealDate: meal.date.setHours(meal.date.getHours() + 12),
        mealType: meal.time,
        scheduledRecipes: meal.recipes,
        displayedDate: meal.displayedDate,
      };
    }
    if (meal.time === 'Dîner') {
      return {
        key: meal.id,
        mealDay: getFrenchizedDay(meal.day),
        mealDate: meal.date.setHours(meal.date.getHours() + 19),
        mealType: meal.time,
        scheduledRecipes: meal.recipes,
        displayedDate: meal.displayedDate,
      };
    }
    return {
      key: meal.id,
      mealDay: getFrenchizedDay(meal.day),
      mealDate: meal.date.setHours(meal.date.getHours() + 0),
      mealType: meal.time,
      scheduledRecipes: meal.recipes,
      displayedDate: meal.displayedDate,
    };
  });

  const groupedByDays = mealsConvertedToDateImproved.reduce((r, a) => {
    r[a.mealDay] = r[a.mealDay] || [];
    r[a.mealDay].push(a);
    return r;
  }, Object.create(null));

  // On compare les dates reçues avec aujourd'hui pour ne pas afficher les passées
  const groupedByDaysArray = Object.values(groupedByDays);
  const today = new Date();
  const todayFormated = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
  const cleanedFromPastArray = groupedByDaysArray.filter((element) => element[0].mealDay >= todayFormated);

  const sortArrayByDay = (a, b) => {
    if (a[0].mealDate > b[0].mealDate) {
      return 1;
    }
    if (a[0].mealDate < b[0].mealDate) {
      return -1;
    }

    return 0;
  };

  const finalArray = cleanedFromPastArray.sort(sortArrayByDay);
  console.log(finalArray);

  const handleChooseGroup = (evt) => {
    const isTargetedGroup = (group) => (group.name === evt.target.textContent);
    const targetedGroupId = userInfos.groups.find(isTargetedGroup);
    // Position
    const targetedGroupIndex = userInfos.groups.findIndex(isTargetedGroup);
    // Valeur
    const targetedGroupValue = evt.target.textContent;
    choosenGroup(targetedGroupIndex, targetedGroupId, targetedGroupValue);
  };

  const toggleAddMealModal = () => {
    sendAddMealModalAction();
  };

  const removeMealClick = (evt) => {
    sendRemoveMealAction(evt.target.parentNode.id);
  };

  const removeRecipeClick = (evt, data) => {
    sendRemoveRecipeAction(data.mealid, data.recipeid);
  };

  return (
    <div className="addmeal__container">
      <h1>Vos repas prévus</h1>
      <div className="addmeal__body">
        <div>
          <ul className="scheduled__meals__container">
            <div className="add__meal__container">
              <div className="add__meal--right">
                <Dropdown selection options={groupOptions} onChange={handleChooseGroup} value={groupValueDropdown} />
              </div>
              <div className="add__meal--left" onClick={toggleAddMealModal}>
                <Icon id="add__meal__icon" name="plus square outline" size="large" />
                Ajouter un créneau
              </div>
            </div>
            {finalArray.map((day) => (
              <div className="day__schedule__box" key={day[0].mealDay}>
                <em className="day__date">{day[0].displayedDate}</em>
                <div>
                  {day.map((meal) => (
                    <div key={meal.key} id={meal.key}>
                      <Icon name="minus" id="remove__meal__icon" onClick={removeMealClick} /> <em>{meal.mealType}</em>
                      <ul className="scheduled__meal">
                        <AddRecipeZone
                          id={meal.key}
                        />
                        {meal.scheduledRecipes.map((recipe) => (
                          <div key={recipe.id + meal.mealDate} className="recipe__box">
                            <li className="scheduled__recipe">
                              <Icon id="remove__meal__icon" name="minus" onClick={removeRecipeClick} mealid={meal.key} recipeid={recipe.id} />
                              <p>{recipe.title} - <i>{recipe.MealHasRecipe.numberPeople} personnes </i></p>
                            </li>
                          </div>
                        ))}
                      </ul>
                      <div className="separator" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </ul>
        </div>
        <div className="advanced__search__access">
          <h2> En manque d'inspiration ?</h2>
          <Link to="/recettes">
            <Button inverted color="orange">Parcourir les recettes !</Button>
          </Link>
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
  sendRemoveMealAction: PropTypes.func.isRequired,
};

export default AddMeal;
