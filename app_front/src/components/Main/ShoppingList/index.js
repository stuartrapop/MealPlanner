import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ShoppingList = ({ userInfos, groupId }) => {
  console.log('userInfos', userInfos);
  const listForShopping = [];
  const groupInfos = userInfos.groups.find((group) => (
    group.id === groupId
  ));
  const shoppingListResults = groupInfos.meals.map((meal) => (
    meal.recipes.map((recipe) => (
      {
        recipeTitle: recipe.title,
        numberPeopleRecipe: recipe.number_people,
        numberPeopleMeal: recipe.MealHasRecipe.numberPeople,
        ingredientsList: recipe.ingredients
          .map((ingredient) => (
            {
              ingredientName: ingredient.name,
              weight: ingredient.weight,
              volume: ingredient.volume,
              countable: ingredient.countable,
              quantity: ingredient.RecipeContainsIngredient.quant,

            }
          )),
      }

    ))));
  shoppingListResults.forEach((recipe) => {
    if (recipe.length !== 0) {
      console.log('recipe', recipe);
      const multiplier = recipe[0].numberPeopleMeal / recipe[0].numberPeopleRecipe;
      recipe[0].ingredientsList.forEach((ingredient) => {
        console.log('ingredient in ingredientList', ingredient);
        console.log('quantity and multiplier', ingredient.quantity, '  ', multiplier);
        ingredient.adjustedQuantity = ingredient.quantity * multiplier;
        listForShopping.push(ingredient);
      });
    }
  });
  const condensedShoppingList = [];

  listForShopping.forEach((item) => {
    const itemExists = condensedShoppingList.find((listItem) => item.ingredientName === listItem.ingredientName);
    if (itemExists) {
      console.log('item exists');
      itemExists.adjustedQuantity += item.adjustedQuantity;
    }
    else {
      condensedShoppingList.push(item);
      console.log('adding', item, 'list ', condensedShoppingList);
    }
  });
  const list = condensedShoppingList.map((oneItem) => {
    let weight;
    let quantity;
    if (oneItem.weight) {
      if (oneItem.adjustedQuantity < 1) {
        weight = 'Gramme(s)';
        quantity = Math.round(((oneItem.adjustedQuantity * 1000) * 100) / 100);
      }
      else {
        weight = 'Kilogramme(s)';
        quantity = Math.round(((oneItem.adjustedQuantity) * 100) / 100);
      }
    }
    else if (oneItem.adjustedQuantity < 1) {
      weight = 'Millilitre(s)';
      quantity = Math.round(((oneItem.adjustedQuantity * 1000) * 100) / 100);
    }
    else {
      weight = 'Litre(s)';
      quantity = Math.round(((oneItem.adjustedQuantity) * 100) / 100);    }
    return (
      <ul className="list__item">
        <li>{oneItem.ingredientName}</li>
        <li>{quantity}</li>
        <li>{weight}</li>
      </ul>

    );
  });
  console.log('ShppingList Result', shoppingListResults);
  console.log('Ingredient List', listForShopping);

  console.log('condensed shopping list', condensedShoppingList);

  console.log(groupInfos);
  return (
    <div className="list__container">
      <ul className="list__item">
        <li>aliment</li>
        <li>quantité</li>
        <li>unité</li>
      </ul>
      {list}
    </div>
  );
};

export default ShoppingList;
