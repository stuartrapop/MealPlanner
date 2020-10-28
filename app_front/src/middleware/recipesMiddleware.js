import axios from 'axios';
import {
  FETCH_RECIPES,
  saveRecipes,
  GET_RECIPE,
  oneRecipe,
} from '../actions/recipes';

const recipesMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  const { displayRecipe } = state.recipes;
  switch (action.type) {
    case FETCH_RECIPES:
      axios.get(`${process.env.APISERVER}/recipes`)
        .then((response) => {
          store.dispatch(saveRecipes(response.data));
        })
        .catch((error) => console.log(error));
      break;
    case GET_RECIPE:
      axios.get(`${process.env.APISERVER}/recipe/${displayRecipe}`)
        .then((response) => {
          store.dispatch(oneRecipe(response.data));
        })
        .catch((error) => console.log(error));
      break;
    default:
      next(action);
  }
};

export default recipesMiddleware;
