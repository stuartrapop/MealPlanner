/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  FETCH_GROUPS_DATAS,
  sendGroupsDatas,
  SEND_TARGETED_VALUES,
  saveNewMeal,
  fetchGroupsDatasAction,
  REMOVE_MEAL_ACTION,
  ADD_RECIPE_TO_DB,
  REMOVE_RECIPE_ACTION,
} from '../actions/groups';

const groupsMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  let mealId;
  let recipeId;
  switch (action.type) {
    case FETCH_GROUPS_DATAS:
      const { id } = state.user;
      axios.get(`http://3.127.235.222:3000/user/${id}`, {}, { withCredentials: true })
        .then((response) => {
          // On trie l'ordre des groupes renvoyé afin d'avoir toujours le même
          const lowestIdFirstSort = (a, b) => (a.id - b.id);
          response.data.groups.sort(lowestIdFirstSort);
          // On appelle les fonctions
          store.dispatch(sendGroupsDatas(response.data));
          next(action);
        })
        .catch((e) => {
          console.error(e);
        });
      break;
    case SEND_TARGETED_VALUES:
      const { choosenDay, choosenTime } = action;
      const groupId = state.groups.activeGroupId;
      const dayString = `${choosenDay}`;
      const day = dayString.split('/').join('-');
      const time = choosenTime;
      axios.post('http://3.127.235.222:3000/meal/create', { day, time, groupId }, { withCredentials: true })
        .then(() => {
          store.dispatch(saveNewMeal());
          store.dispatch(fetchGroupsDatasAction());
          next(action);
        })
        .catch((e) => {
          console.log(e);
        });
      break;
    case REMOVE_MEAL_ACTION:
      const mealIdForURL = action.targetMealId;
      axios.delete(`http://3.127.235.222:3000/meal/${mealIdForURL}`, {}, { withCredentials: true })
        .then(() => {
          store.dispatch(fetchGroupsDatasAction());
          next(action);
        })
        .catch((e) => {
          console.log(e);
        });
      break;
    case ADD_RECIPE_TO_DB:
      mealId = action.mealId;
      recipeId = action.recipeId;
      const { numberPeople } = state.groups;
      axios.post('http://3.127.235.222:3000/meal/addRecipe', { recipeId, mealId, numberPeople }, { withCredentials: true })
        .then(() => {
          store.dispatch(fetchGroupsDatasAction());
          next(action);
        })
        .catch((e) => {
          console.log(e);
        });
      break;
    case REMOVE_RECIPE_ACTION:
      mealId = action.mealId;
      recipeId = action.recipeId;
      axios.post('http://3.127.235.222:3000/meal/removeRecipe', { mealId, recipeId }, { withCredentials: true })
        .then(() => {
          store.dispatch(fetchGroupsDatasAction());
          next(action);
        })
        .catch((e) => {
          console.log(e);
        });
      break;
    default:
      next(action);
      break;
  }
};

export default groupsMiddleware;
