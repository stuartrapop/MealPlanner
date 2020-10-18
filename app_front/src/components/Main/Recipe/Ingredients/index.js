// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Ingredients = ({ ingredients }) => (
  <div className="ingredients">
    <h3> Pour ce faire, il vous faudra : </h3>
    <ul>
      {ingredients.map((ingredient) => (
        <li className="ingredient" key={ingredient}><p>{ingredient}</p></li>
      ))}
    </ul>
  </div>
);

// == Export
export default Ingredients;

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};
