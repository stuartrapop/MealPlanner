import { SAVE_RECIPES, ONE_RECIPE } from '../actions/recipes';
import { filterRecipes } from '../selectors/recipes';
import { MODIFY_SEARCH } from '../actions/searchBar';

export const initialState = {
  recipes: [],
  loading: true,
  searchedRecipes: [],
  searchInput: '',
  recipe: [],
  displayRecipe: 1,
  displayRecipeSlug: '',
};

const recipes = (state = initialState, action = {}) => {
  switch (action.type) {
    // Action to get a direct import of all our recipes
    case SAVE_RECIPES:
      return {
        ...state,
        recipes: action.recipes,
        searchedRecipes: action.recipes,
        loading: false,
      };
      // All recipes filtered according to user search bar's input
    case MODIFY_SEARCH:
      return {
        ...state,
        loading: false,
        searchInput: action.searchInput,
        searchedRecipes: filterRecipes(state.recipes, action.searchInput),
      };
    case ONE_RECIPE:
      return {
        ...state,
        recipe: action.recipe,
        loading: false,
      };
    default:
      return state;
  }
};

export default recipes;
