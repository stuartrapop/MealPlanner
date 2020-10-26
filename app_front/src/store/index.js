// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from '../reducers';
import logMiddleware from '../middleware/logMiddleware';
import userMiddleware from '../middleware/userMiddleware';
import searchBarMiddleware from '../middleware/searchBarMiddleware';
import recipesMiddleware from '../middleware/recipesMiddleware';
import recipeMiddleware from '../middleware/recipeMiddleware';
import headerMiddleware from '../middleware/headerMiddleware';
import groupsMiddleware from '../middleware/groupsMiddleware';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    userMiddleware,
    searchBarMiddleware,
    recipesMiddleware,
    recipeMiddleware,
    headerMiddleware,
    groupsMiddleware,
  ),
);

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers,
);

// == Export
export default store;
