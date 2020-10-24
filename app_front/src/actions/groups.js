export const FETCH_GROUPS_DATAS = 'FETCH_GROUPS_DATAS';
export const SEND_GROUPS_DATAS = 'SEND_GROUPS_DATAS';
export const CHOOSE_GROUP = 'CHOOSE_GROUP';
export const TOGGLE_MEAL_MODAL = 'TOGGLE_MEAL_MODAL';
export const SEND_TARGETED_VALUES = 'SEND_TARGETED_VALUES';
export const SAVE_NEW_MEAL = 'SAVE_NEW_MEAL';

export const fetchGroupsDatasAction = () => ({
  type: FETCH_GROUPS_DATAS,
});

export const sendGroupsDatas = (data) => ({
  type: SEND_GROUPS_DATAS,
  data,
});

export const chooseGroup = (targetIndexValue, targetIdValue) => ({
  type: CHOOSE_GROUP,
  targetIndexValue,
  targetIdValue,
});

export const toggleMealModal = () => ({
  type: TOGGLE_MEAL_MODAL,
});

export const sendTargetedValues = (choosenDay, choosenTime) => ({
  type: SEND_TARGETED_VALUES,
  choosenDay,
  choosenTime,
});

export const saveNewMeal = () => ({
  type: SAVE_NEW_MEAL,
});
