import { combineReducers } from 'redux';
import user from './user';
import recipes from './recipes';
import header from './header';
import groups from './groups';

export default combineReducers({
  user,
  recipes,
  header,
  groups,
});
