import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Pdf from 'react-to-pdf';

const ref = React.createRef();

const ShoppingList = ({ userInfos, groupId }) => {
  console.log('userInfos', userInfos);
  const listForShopping = [];
  const groupInfos = userInfos.groups.find((group) => (
    group.id === groupId
  ));
  console.log('groupInfos', groupInfos);

  const shoppingListResults = groupInfos.meals.map((meal) => {
    const startingDay = new Date();
    const mealDay = new Date(meal.day);
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
  console.log('condensed', condensedShoppingList);
  const groupByFamily = (objectsArray, familyItem) => objectsArray.reduce((acc, obj) => {
    const cle = obj[familyItem];
    if (!acc[cle]) {
      acc[cle] = [];
    }
    acc[cle].push(obj);
    return acc;
  }, {});

  const ingredientsByFamily = groupByFamily(condensedShoppingList, 'familyName');
  console.log('ingredeintfamily', ingredientsByFamily);

  const list = condensedShoppingList.map((oneItem) => {
    let countable;
    let volume;
    let weight;
    let quantity;
    if (oneItem.weight) {
      if (oneItem.adjustedQuantity < 1) {
        weight = 'Gramme(s)';
        quantity = Math.round(((oneItem.adjustedQuantity * 1000) * 100) / 100);
      }
      else {
        weight = 'Kilogramme(s)';
        quantity = Math.round(((oneItem.adjustedQuantity) * 100) / 10);
      }
    }
    else if (oneItem.volume) {
      if (oneItem.adjustedQuantity < 1) {
        volume = 'Millilitre(s)';
        quantity = Math.round(((oneItem.adjustedQuantity * 1000) * 100) / 100);
      }
      else {
        volume = 'Litre(s)';
        quantity = Math.round(((oneItem.adjustedQuantity) * 10) / 10);
      }
    }
    else if (oneItem.countable) {
      countable = 'Pièce(s)';
      quantity = Math.round(((oneItem.adjustedQuantity) * 100) / 100);
    }
    console.log('oneitem', oneItem);
    return (
      <tr className="list__item">
        <td className="list__item__quantity">{quantity}</td>
        <td>{weight}{volume}{countable}</td>
      </tr>
    );
  });

  return (

    <div>
      <div ref={ref} className="list__container">
        <table>
          <tr className="list__item">
            <td>aliment</td>
            <td className="list__item__quantity">quantité</td>
            <td>unité</td>
          </tr>
          {list}
        </table>
      </div>
      <div>{ingredientsByFamily.Sucres[0].familyName}</div>
      <Pdf targetRef={ref} filename="ma-liste-de-crouses.pdf">
        {({ toPdf }) => <button type="button" onClick={toPdf}>Ma liste de course au format Pdf</button>}
      </Pdf>
    </div>
  );
};

export default ShoppingList;
