import React from 'react';
import SearchBar from 'src/containers/SearchBar';
import RecipesPart from './RecipesPart';

import AllRecipes from '../../../../data/recipes';
import './styles.scss';

const Recipes = () => (
  <div>
    <SearchBar />
    <RecipesPart recipes={AllRecipes} />
  </div>
);

export default Recipes;
