import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import Ingredients from './Ingredients';
import Description from './Description';
import './styles.scss';

const Recipe = ({
  getOneRecipe, recipe, count, increment, decrement,
}) => {
  if (recipe.difficulty === 'Facile') {
    recipe.difficulty = <p>Difficulté de cette recette : <Icon name="circle" /><Icon name="circle outline" /><Icon name="circle outline" /> </p>;
  }
  else if (recipe.difficulty === 'Moyenne') {
    recipe.difficulty = <p>Difficulté de cette recette : <Icon name="circle" /><Icon name="circle" /><Icon name="circle outline" /> </p>;
  }
  else if (recipe.difficulty === 'Difficile') {
    recipe.difficulty = <p>Difficulté de cette recette : <Icon name="circle" /><Icon name="circle" /><Icon name="circle" /> </p>;
  }

  useEffect(() => {
    getOneRecipe();
  }, []);
  return (
    <section className="one__recipe">
      <h2 className="recipe__title">{recipe.title}</h2>
      <div className="counter">
        <button type="button" onClick={decrement}>⇩</button>
        <div className="value">{count}</div>
        <button type="button" onClick={increment}>⇧</button>
      </div>
      <div className="recipe__desc">
        {recipe.difficulty}
        <p className="recipes__infos"> <Icon name="time" />  Temps de préparation : {recipe.cooking_time} minutes</p>
      </div>
      <div className="one__recipe__container">
        <div className="recipe__picture">
          <img className="recipe__pic__image" src={recipe.url} alt="logo recette" />
          <div className="recipe__citation">
            <Icon id="recipe__quote__left" name="quote left" />
            <p className="recipe__sentence">  La gastronomie est l'Art d'utiliser la nourriture pour créer du bonheur </p>
            <Icon id="recipe__quote__right" name="quote right" />
          </div>
        </div>
        <div className="one__recipe__sub__container">
          <Description recipe={recipe} />
          <Ingredients recipe={recipe.ingredients} />
        </div>
      </div>
      <div className="one__recipe__contains__button">
        <Link className="one__recipe__button" to="/recettes"> Voir d'autres recettes </Link>
        <Link className="one__recipe__button" to="/"> Ajouter cette recette à mon planning </Link>
      </div>
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

Recipe.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

Recipe.defaultProps = {
  count: 0,
};

export default Recipe;
