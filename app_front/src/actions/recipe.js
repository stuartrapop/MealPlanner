export const GET_RECIPE = 'GET_RECIPE';
export const ONE_RECIPE = 'ONE_RECIPE';
export const CHANGE_DISPLAY_RECIPE = 'CHANGE_DISPLAY_RECIPE';
export const SAVE_RECIPES = 'SAVE_RECIPES';

export const getRecipe = (text) => ({
  type: GET_RECIPE,
  text,
});

export const oneRecipe = (recipe, text) => ({
  type: ONE_RECIPE,
  recipe,
  text,
});

export const saveRecipes = (recipes) => ({
  type: SAVE_RECIPES,
  recipes,
});
