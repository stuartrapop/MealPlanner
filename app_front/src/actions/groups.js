export const FETCH_GROUPS_DATAS = 'FETCH_GROUPS_DATAS';
export const SEND_GROUPS_DATAS = 'SEND_GROUPS_DATAS';
export const CHOOSE_GROUP = 'CHOOSE_GROUP';
export const TOGGLE_MEAL_MODAL = 'TOGGLE_MEAL_MODAL';

export const fetchGroupsDatasAction = () => ({
  type: FETCH_GROUPS_DATAS,
});

export const sendGroupsDatas = (data) => ({
  type: SEND_GROUPS_DATAS,
  data,
});

export const chooseGroup = (value) => ({
  type: CHOOSE_GROUP,
  value,
});

export const toggleMealModal = () => ({
  type: TOGGLE_MEAL_MODAL,
});
