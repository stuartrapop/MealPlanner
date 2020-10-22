import { combineReducers } from 'redux';
import user from './user';
import searchBar from './searchBar';
import recipes from './recipes';

export default combineReducers({
  user,
  searchBar,
  recipes,
});
