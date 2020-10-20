import { combineReducers } from 'redux';
import user from './user';
import searchBar from './searchBar';

export default combineReducers({
  user,
  searchBar,
});
