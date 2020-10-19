// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Ingredients = ({ ingredients }) => (
  <ul className="ingredients">
    {ingredients.map((ingredient) => (
      <li className="ingredient" key={ingredient}>{ingredient}</li>
    ))}
  </ul>
);

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};
// == Export
export default Ingredients;

