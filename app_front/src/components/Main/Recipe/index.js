import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Ingredients from './Ingredients';
import Description from './Description';
import './styles.scss';

const Recipe = ({ getOneRecipe, recipe }) => {
  useEffect(() => {
    getOneRecipe();
  }, []);
  return (
    <section className="one__recipe">
      <Description recipe={recipe} />
      {/* <Ingredients recipe={recipe.ingredients} /> */}
    </section>
  );
};

// Recipe.propTypes = {
//   recipes: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//       title: PropTypes.string,
//       author: PropTypes.string,
//       difficulty: PropTypes.string,
//       url: PropTypes.string,
//       instruction: PropTypes.string,
//       ingredients: PropTypes.array,
//     }).isRequired,
//   ).isRequired,
// };

export default Recipe;
