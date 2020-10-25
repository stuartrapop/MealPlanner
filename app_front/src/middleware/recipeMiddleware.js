import axios from 'axios';
import { GET_RECIPE, oneRecipe } from '../actions/recipe';

const recipesMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case GET_RECIPE:
      const {recipe, displayRecipe } = state.recipe;
      axios.get(`http://3.127.235.222:3000/recipe/${displayRecipe}`)
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
