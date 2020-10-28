/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  FETCH_GROUPS_DATAS,
  sendGroupsDatas,
  SEND_TARGETED_VALUES,
  saveNewMeal,
  fetchGroupsDatasAction,
  REMOVE_MEAL_ACTION,
  updateAddRecipeZoneDisplayedArray,
} from '../actions/groups';

const groupsMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case FETCH_GROUPS_DATAS:
      const { id } = state.user;
      axios.get(`https://amanger.com/api/user/${id}`, {}, { withCredentials: true })
        .then((response) => {
          // On créer un tableau avec autant de case que de meals et toutes initialisée à false
          const mealNumber = (response.data.groups[state.groups.activeGroup].meals.length);
          const newaddRecipeZoneDisplayed = [];
          for (let i = 0; i < mealNumber; i++) {
            newaddRecipeZoneDisplayed.push(false);
          }
          // On trie l'ordre des groupes renvoyé afin d'avoir toujours le même
          const lowestIdFirstSort = (a, b) => (a.id - b.id);
          response.data.groups.sort(lowestIdFirstSort);
          // On appelle les fonctions
          store.dispatch(sendGroupsDatas(response.data));
          store.dispatch(updateAddRecipeZoneDisplayedArray(newaddRecipeZoneDisplayed));
          next(action);
        })
        .catch((e) => {
          console.error(e);
        });
      break;
    case SEND_TARGETED_VALUES:
      const { choosenDay, choosenTime } = action;
      const groupId = state.groups.activeGroupId;
      const day = choosenDay;
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
      const mealId = action.targetMealId;
      axios.delete(`http://3.127.235.222:3000/meal/${mealId}`, {}, { withCredentials: true })
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
