import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Recipe = ({ recipes }) => (
  <div className="recipes">
    {recipes.map((recipe) => (
      <div className="recipe" key={recipe.id}>
        <h2 className="recipe__title">
          {recipe.title} {recipe.difficulty}
        </h2>
        <span className="recipe__author">{recipe.author}</span>
        <img className="recipe__image" src={recipe.url} alt="logo recette" />
        <div className="recipe__instruction">{recipe.instruction}</div>
        <div className="recipe__ingredients">{recipe.ingredients}</div>
      </div>
    ))}
  </div>
);

export default Recipe;

Recipe.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      author: PropTypes.string,
      difficulty: PropTypes.string,
      url: PropTypes.string,
      instruction: PropTypes.string,
      ingredients: PropTypes.string,
    }).isRequired,
  ).isRequired,
};
