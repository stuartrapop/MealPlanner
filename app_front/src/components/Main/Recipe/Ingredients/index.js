// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

// == Import
import './styles.scss';

// == Composant
const Ingredients = ({ recipe }) => {
  const ingredients = recipe.map((ingredient) => {
    let countable;
    let volume;
    let weight;
    let { quantity } = ingredient.RecipeContainsIngredient;
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
    }
    return (
      <li className="ingredient__list" key={ingredient.id}> <Icon id="fork__icon" name="food" />  {ingredient.name} :   <span id="quantity__span"> {quantity} {countable}{weight}{volume}</span> </li>
    );
  });
  return (
    <div className="recipe__ingredients">
      <h3 className="recipe__ingrdient__title"> Pour ce faire, il vous faudra : </h3>
      <ul>
        {ingredients}
      </ul>
    </div>
  );
};

// Ingredients.propTypes = {
//   ingredients: PropTypes.arrayOf(
//     PropTypes.string,
//   ).isRequired,
// };
export default Ingredients;
