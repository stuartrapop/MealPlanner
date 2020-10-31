import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Ingredients from './Ingredients';
import Description from './Description';
import './styles.scss';

const Recipe = ({ getOneRecipe, recipe }) => {
  useEffect(() => {
    getOneRecipe();
  }, []);
  return (
    <section className="one__recipe">
      <h2 className="recipe__title">{recipe.title}</h2>
      <div className="one__recipe__container">
        <div className="recipe__picture">
          <img className="recipe__pic__image" src={recipe.url} alt="logo recette" />
        </div>
        <div className="one__recipe__sub__container">
          <Description recipe={recipe} />
          <Ingredients recipe={recipe.ingredients} />
        </div>
      </div>
      <Link to="/recettes"> Voir d'autres recettes </Link>
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
