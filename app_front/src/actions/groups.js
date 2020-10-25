export const FETCH_GROUPS_DATAS = 'FETCH_GROUPS_DATAS';
export const SEND_GROUPS_DATAS = 'SEND_GROUPS_DATAS';
export const CHOOSE_GROUP = 'CHOOSE_GROUP';
export const TOGGLE_MEAL_MODAL = 'TOGGLE_MEAL_MODAL';
export const SEND_TARGETED_VALUES = 'SEND_TARGETED_VALUES';
export const SAVE_NEW_MEAL = 'SAVE_NEW_MEAL';
export const SEND_ERROR_MESSAGE = 'SEND_ERROR_MESSAGE';
export const REMOVE_MEAL_ACTION = 'REMOVE_MEAL_ACTION';
export const TOGGLE_ADD_RECIPE_ZONE = 'TOGGLE_ADD_RECIPE_ZONE';
export const UPDATE_ADD_RECIPE_DISPLAYED_ARRAY = 'UPDATE_ADD_RECIPE_DISPLAYED_ARRAY';

export const fetchGroupsDatasAction = () => ({
  type: FETCH_GROUPS_DATAS,
});

export const sendGroupsDatas = (data) => ({
  type: SEND_GROUPS_DATAS,
  data,
});

export const chooseGroup = (targetIndexValue, targetIdValue, targetedGroupValue) => ({
  type: CHOOSE_GROUP,
  targetIndexValue,
  targetIdValue,
  targetedGroupValue,
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

export const sendErrorMessage = () => ({
  type: SEND_ERROR_MESSAGE,
});

export const removeMealAction = (targetMealId) => ({
  type: REMOVE_MEAL_ACTION,
  targetMealId,
});

export const toggleAddRecipeZone = (id) => ({
  type: TOGGLE_ADD_RECIPE_ZONE,
  id,
});

export const updateAddRecipeZoneDisplayedArray = (newArray) => ({
  type: UPDATE_ADD_RECIPE_DISPLAYED_ARRAY,
  newArray,
});
