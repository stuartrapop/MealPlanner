import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ recipe }) => {
  console.log('je  suis recipe', recipe);
  return (
    <div className="recipes">
      <div className="recipe" key={recipe.id}>
        <h2 className="recipe__title">{recipe.title}</h2>
        <p className="recipe__difficulty"> Difficulté de cette recette : {recipe.difficulty}</p>
        <div className="recipe__pic">
          <img className="recipe__pic__image" src={recipe.url} alt="logo recette" />
          <p className="recipe__author"> Cette recette vous est proposée par : <br /> {recipe.author}</p>
        </div>
        <div className="recipe__text__container">
          <div className="recipe__instruction">
            <h3 className="recipe__instruction__title"> Voici les instructions à suivre :</h3>
            <p className="recipe__instruction__text">{recipe.instructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

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
