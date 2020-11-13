import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { getSlugFromTitle } from '../../../../selectors/recipes';


// import Tags from './Tags';

const RecipesPart = ({ searchedRecipes }) => (
  <div className="body__recipes">
    <div className="container__recipes">
      {searchedRecipes.map((recipe) => (
        <div className="card__recipes" key={recipe.id}>
          <div className="card__recipes__face face1">
            <div className="card__recipes__content">
              <img className="recipes__picture" src={recipe.url} alt="recipe" />
              <h3 className="recipes__subtitle">{recipe.title}</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <h3 className="recipes__second__subtitle"> {recipe.title}</h3>
              <a id="recipes__icons">
                <Icon name="star" />
                <Icon name="star" />
                <Icon name="star" />
                <Icon name="star" />
                <Icon name="star half" />
                4.5/5
              </a>
              <p className="recipes__infos"> Temps de préparation : {recipe.cooking_time} minutes <br /> Difficulté de la recette : {recipe.difficulty}</p>
              <Link to={`/recette/${getSlugFromTitle(recipe.title)}`} className="recipes__button" id={recipe.id} title={recipe.title}>Découvrir la recette complète</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

RecipesPart.propTypes = {
  searchedRecipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      author: PropTypes.string,
      difficulty: PropTypes.string,
      cooking_time: PropTypes.number,
      number_people: PropTypes.number,
      url: PropTypes.string,
      user_id: PropTypes.number,
      instruction: PropTypes.string,
      ingredients: PropTypes.array,
    }).isRequired,
  ).isRequired,
};

export default RecipesPart;
