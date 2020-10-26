// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Ingredients = ({ recipe }) => (
  <div className="ingredients">
    <h3> Pour ce faire, il vous faudra : </h3>
    <ul>
      {recipe.map((ingredient) => (
        <li className="ingredient" key={ingredient.id}>{ingredient.RecipeContainsIngredient.quantity} {ingredient.name}</li>
      ))}
    </ul>
  </div>
);

// Ingredients.propTypes = {
//   ingredients: PropTypes.arrayOf(
//     PropTypes.string,
//   ).isRequired,
// };
export default Ingredients;
