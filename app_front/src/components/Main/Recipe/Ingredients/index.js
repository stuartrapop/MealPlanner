// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Ingredients = ({ recipe }) => {(
  <div className="ingredients">
    <h3> Pour ce faire, il vous faudra : </h3>
    <ul>
      
        <li className="ingredient" key={recipe.id}><p>{recipe.id}</p></li>
     
    </ul>
  </div>
)};

// Ingredients.propTypes = {
//   ingredients: PropTypes.arrayOf(
//     PropTypes.string,
//   ).isRequired,
// };
// // == Export
export default Ingredients;
