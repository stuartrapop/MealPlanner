import axios from 'axios';
import {
  UPDATE_SELECTION,
  displaySelection,
} from 'src/actions/searchBar';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case UPDATE_SELECTION:      
      axios.get('http://localhost:3000/recipes')
        .then((response) => {
          console.log(value);
          const filteredValue = response.data;
          store.dispatch(displaySelection(filteredValue));
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
