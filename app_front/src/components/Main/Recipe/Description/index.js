import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Description = ({ recipe }) => (
  <div className="recipe__description__container" key={(recipe.id.toString())}>
    <div className="recipe__text__container">
      <div className="recipe__instruction">
        <h3 className="recipe__instruction__title"> Voici les instructions à suivre :</h3>
        <p className="recipe__instruction__text">{recipe.instructions}</p>
      </div>
    </div>
  </div>
);

Description.propTypes = {
  recipe: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      instruction: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Description;
