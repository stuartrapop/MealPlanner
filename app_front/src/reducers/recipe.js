import { ONE_RECIPE, CHANGE_DISPLAY_RECIPE } from '../actions/recipe';

export const initialState = {
  recipe: [],
  displayRecipe: 1,
  displayRecipeSlug: '',
};

const recipe = (state = initialState, action = {}) => {
  switch (action.type) {
    case ONE_RECIPE:
      return {
        ...state,
        recipe: action.recipe,
      };
    case CHANGE_DISPLAY_RECIPE:
      return {
        ...state,
        displayRecipe: action.recipeId,
        displayRecipeSlug: action.recipeSlug,
      };
    default:
      return state;
  }
};

export default recipe;
