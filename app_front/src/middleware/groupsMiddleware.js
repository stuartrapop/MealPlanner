/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  FETCH_GROUPS_DATAS, sendGroupsDatas, SEND_TARGETED_VALUES, saveNewMeal, fetchGroupsDatasAction,
} from '../actions/groups';

const groupsMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case FETCH_GROUPS_DATAS:
      const { id } = state.user;
      axios.get(`http://3.127.235.222:3000/user/${id}`, {}, { withCredentials: true })
        .then((response) => {
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
    default:
      next(action);
      break;
  }
};

export default groupsMiddleware;
