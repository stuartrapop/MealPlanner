// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from '../reducers';
import logMiddleware from '../middleware/logMiddleware';
import userMiddleware from '../middleware/userMiddleware';
import recipesMiddleware from '../middleware/recipesMiddleware';
import headerMiddleware from '../middleware/headerMiddleware';
import groupsMiddleware from '../middleware/groupsMiddleware';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    userMiddleware,
    recipesMiddleware,
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
