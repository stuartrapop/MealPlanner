import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Description = ({ recipe }) => (
  <div>
  <div className="recipe__description__container" key={recipe.id}>
    <p className="recipe__difficulty"> Difficulté de cette recette : {recipe.difficulty}</p>
    <p className="recipes__infos"> Temps de préparation : {recipe.cooking_time} minutes</p>
    <div className="recipe__text__container">
      <div className="recipe__instruction">
        <h3 className="recipe__instruction__title"> Voici les instructions à suivre :</h3>
        <p className="recipe__instruction__text">{recipe.instructions}</p>
      </div>
    </div>
  </div>
  <div className="recipe__description__container" key={recipe.id}>
  <p className="recipe__difficulty"> Difficulté de cette recette : {recipe.difficulty}</p>
  <p className="recipes__infos"> Temps de préparation : {recipe.cooking_time} minutes</p>
  <div className="recipe__text__container">
    <div className="recipe__instruction">
      <h3 className="recipe__instruction__title"> Voici les instructions à suivre :</h3>
      <p className="recipe__instruction__text">{recipe.instructions}</p>
    </div>
  </div>
</div>
<div className="recipe__description__container" key={recipe.id}>
    <p className="recipe__difficulty"> Difficulté de cette recette : {recipe.difficulty}</p>
    <p className="recipes__infos"> Temps de préparation : {recipe.cooking_time} minutes</p>
    <div className="recipe__text__container">
      <div className="recipe__instruction">
        <h3 className="recipe__instruction__title"> Voici les instructions à suivre :</h3>
        <p className="recipe__instruction__text">{recipe.instructions}</p>
      </div>
    </div>
  </div>
  </div>
);

Description.propTypes = {
  recipe: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      author: PropTypes.string,
      difficulty: PropTypes.string,
      url: PropTypes.string,
      instruction: PropTypes.string,
      ingredients: PropTypes.array,
    }).isRequired,
  ).isRequired,
};

export default Description;
