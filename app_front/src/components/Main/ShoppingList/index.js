import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import './styles.scss';
import Pdf from 'react-to-pdf';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

const ref = React.createRef();

const ShoppingList = ({ userInfos, groupId }) => {
  const listForShopping = [];
  const groupInfos = userInfos.groups.find((group) => (
    group.id === groupId
  ));
  const shoppingListResults = groupInfos.meals.map((meal) => {
    const startingDay = new Date();
    const mealDay = new Date(meal.day);
    console.log(mealDay);

    startingDay.setDate(startingDay.getDate() - 0.99);
    if (mealDay >= startingDay) {
      return (
        meal.recipes.map((recipe) => (
          {
            recipeTitle: recipe.title,
            numberPeopleRecipe: recipe.number_people,
            numberPeopleMeal: recipe.MealHasRecipe.numberPeople,
            ingredientsList: recipe.ingredients
              .map((ingredient) => (
                {
                  familyName: ingredient.families[0].name,
                  ingredientName: ingredient.name,
                  ingredientId: ingredient.id,
                  weight: ingredient.weight,
                  volume: ingredient.volume,
                  countable: ingredient.countable,
                  quantity: ingredient.RecipeContainsIngredient.quant,
                  familyId: ingredient.families[0].id,
                }
              )),
          }
        )));
    }
  });
  shoppingListResults.forEach((recipe) => {
    if (recipe) {
      if (recipe.length !== 0) {
        const multiplier = recipe[0].numberPeopleMeal / recipe[0].numberPeopleRecipe;
        recipe[0].ingredientsList.forEach((ingredient) => {
          ingredient.adjustedQuantity = ingredient.quantity * multiplier;
          listForShopping.push(ingredient);
        });
      }
    }
  });
  const condensedShoppingList = [];
  listForShopping.forEach((item) => {
    const itemExists = condensedShoppingList.find((listItem) => item.ingredientName === listItem.ingredientName);
    if (itemExists) {
      itemExists.adjustedQuantity += item.adjustedQuantity;
    }
    else {
      condensedShoppingList.push(item);
    }
  });
  //  here, we use a code to group all ingredients by family https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce
  const groupByFamily = (objectsArray, familyItem) => objectsArray.reduce((acc, obj) => {
    const cle = obj[familyItem];
    if (!acc[cle]) {
      acc[cle] = [];
    }
    acc[cle].push(obj);
    return acc;
  }, {});
  // Then, we use family id to get our object of arrays.
  const ingredientsByFamily = groupByFamily(condensedShoppingList, 'familyId');
  // We transfor our oubject of arrays into array of arrays so we can map on it.
  const arrayOfIngredients = (Object.values(ingredientsByFamily));
  console.log(arrayOfIngredients);

  const finalArray = arrayOfIngredients.map((family) => (
    (
      <div key={family.id} className="list__ingredient__family">
        <p className="list__family__title">   {family[0].familyName}</p>
        <div className="list__ingredients">
          {family.map((ingredient) => {
            console.log(ingredient);

            let countable;
            let volume;
            let weight;
            let quantity = ingredient.adjustedQuantity;
            if (ingredient.weight) {
              if (quantity < 1) {
                weight = 'g';
                quantity = Math.round(((quantity * 1000) * 100) / 100);
              }
              else {
                weight = 'kg';
                quantity = Math.round(((quantity) * 100) / 10);
              }
            }
            else if (ingredient.volume) {
              if (quantity < 1) {
                volume = 'ml';
                quantity = Math.round(((quantity * 1000) * 100) / 100);
              }
              else {
                volume = 'L';
                quantity = Math.round(((quantity) * 100) / 100);
              }
            }
            else if (ingredient.countable) {
              countable = 'Pcs';
              quantity = Math.round(((quantity) * 100) / 100);
            }
            return (
              <div key={`${ingredient.ingredientId}`} className="list__ingredient__details"> {ingredient.ingredientName} : {quantity} {countable}{weight}{volume}</div>
            );
          })}
        </div>
      </div>
    )
  ));

  return (
<<<<<<< HEAD
   <div>

        <div ref={ref} className="list__container">
          {finalArray}
        </div>
        <Pdf targetRef={ref} y={-5} scale={0.6} filename="ma-liste-de-crouses.pdf">
          {({ toPdf }) => <button className="list__button_pdf" type="button" onClick={toPdf}>Ma liste de course au format Pdf</button>}
        </Pdf>

</div>
=======
    <div>
      <div ref={ref} className="list__container">
        {finalArray}
      </div>
      <Pdf targetRef={ref} scale={0.4} filename="ma-liste-de-crouses.pdf">
        {({ toPdf }) => <button className="list__button_pdf" type="button" onClick={toPdf}>Ma liste de course au format Pdf</button>}
      </Pdf>
    </div>

>>>>>>> team_page
  );
};

export default ShoppingList;
