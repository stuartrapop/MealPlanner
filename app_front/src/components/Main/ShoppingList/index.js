import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Pdf from 'react-to-pdf';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import {
  Page, Text, View, Document, StyleSheet, ReactPDF
} from '@react-pdf/renderer';

const ref = React.createRef();
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

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
  const finalArray = arrayOfIngredients.map((family) => (
    (
      <div className="list__ingredient__family">
        <p className="list__family__title"> <Icon name="tag" />  {family[0].familyName}</p>
        <div className="list__ingredients">
          {family.map((ingredient) => {
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
              <div className="list__ingredient__details"> {ingredient.ingredientName} : {quantity} {countable}{weight}{volume}</div>
            );
          })}
        </div>
      </div>
    )
  ));

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>
            <div className="list__body">
              <h2 className="list__title"> Ma liste de courses</h2>
              <Link id="list__back__planning" to="/"> <Icon name="arrow alternate circle left outline" />Retourner sur mon planning </Link>

              <div ref={ref} className="list__container">
                {finalArray}
              </div>
              <Pdf targetRef={ref} filename="ma-liste-de-crouses.pdf">
                {({ toPdf }) => <button className="list__button_pdf" type="button" onClick={toPdf}>Ma liste de course au format Pdf</button>}
              </Pdf>
            </div>
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default ShoppingList;
