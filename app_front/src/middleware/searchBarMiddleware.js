import axios from 'axios';
import {
  UPDATE_SELECTION,
  displaySelection,
} from '../actions/searchBar';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case UPDATE_SELECTION:
      axios.get('http://localhost:3000/recipes')
        .then((response) => {
          const userInput = action.text.toLowerCase();
          const values = response.data.map((data) => data.title);
          store.dispatch(displaySelection(values));

          console.log(userInput, values);
          // next(action);
        })
        .catch((e) => {
          console.error(e);
        });
      break;
    default:
      next(action);
      break;
  }
};

export default userMiddleware;
