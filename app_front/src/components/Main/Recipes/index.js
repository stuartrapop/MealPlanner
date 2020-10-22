import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../../../containers/SearchBar';
import RecipesPart from './RecipesPart';

import './styles.scss';

const Recipes = ({ fetchrecipes, recipes }) => {
  useEffect(() => {
    fetchrecipes();
  }, []);
  return (
    <div>
      <SearchBar />
      <RecipesPart recipes={recipes} />
    </div>
  );
};

Recipes.propTypes = {
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
