import { SAVE_RECIPES } from '../actions/recipes';

export const initialState = {
  recipes: [],
};

const recipes = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES:
      return {
        ...state,
        recipes: action.recipes,
      };
    default:
      return state;
  }
};

export default recipes;
