import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import RecipesPart from './RecipesPart';

import './styles.scss';

const Recipes = ({ changeDisplayRecipe, fetchrecipes, recipes }) => {
  useEffect(() => {
    fetchrecipes();
  }, []);
  return (
    <section className="recipes__container">
      <SearchBar />
      <div className="recipes__title">
        Qu'est ce qu'on mange ce soir ?
      </div>
      <RecipesPart
        recipes={recipes}
        changeDisplayRecipe={changeDisplayRecipe}
      />
    </section>
  );
};

Recipes.propTypes = {
  changeDisplayRecipe: PropTypes.func.isRequired,
  fetchrecipes: PropTypes.func.isRequired,
  recipes: PropTypes.arrayOf(
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
export default Recipes;
