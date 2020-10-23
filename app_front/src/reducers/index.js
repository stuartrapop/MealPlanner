import { combineReducers } from 'redux';
import user from './user';
import searchBar from './searchBar';
import recipes from './recipes';
import header from './header';
import recipe from './recipe';

export default combineReducers({
  user,
  searchBar,
  recipes,
  header,
  recipe,
});
