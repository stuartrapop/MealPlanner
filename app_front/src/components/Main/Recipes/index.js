import React from 'react';
import RecipesPart from './RecipesPart';
import AllRecipes from '../../../../data/recipes';

import './styles.scss';

const Recipes = () => (
  <RecipesPart recipes={AllRecipes} />
);

export default Recipes;
