import axios from 'axios';
import { FETCH_RECIPES, saveRecipes } from '../actions/recipes';

const recipesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      axios.get('http://3.127.235.222:3000/recipes')
        .then((response) => {
          store.dispatch(saveRecipes(response.data));
        })
        .catch((error) => console.log(error));
      break;
    default:
      next(action);
  }
};

export default recipesMiddleware;
