export const FETCH_GROUPS_DATAS = 'FETCH_GROUPS_DATAS';
export const SEND_GROUPS_DATAS = 'SEND_GROUPS_DATAS';
export const CHOOSE_GROUP = 'CHOOSE_GROUP';
export const TOGGLE_MEAL_MODAL = 'TOGGLE_MEAL_MODAL';
export const SEND_TARGETED_VALUES = 'SEND_TARGETED_VALUES';
export const SAVE_NEW_MEAL = 'SAVE_NEW_MEAL';
export const SEND_ERROR_MESSAGE = 'SEND_ERROR_MESSAGE';
export const REMOVE_MEAL_ACTION = 'REMOVE_MEAL_ACTION';
export const CHANGE_ACTIVE_ENTRY_ID = 'CHANGE_ACTIVE_ENTRY_ID';
export const START_SEARCH = 'START_SEARCH';
export const SHOW_RESULTS_ACTION = 'SHOW_RESULTS_ACTION';
export const ADD_RECIPE_TO_DB = 'ADD_RECIPE_TO_DB';
export const SEND_NUMBER_PEOPLE_ACTION = 'SEND_NUMBER_PEOPLE_ACTION';
export const REMOVE_RECIPE_ACTION = 'REMOVE_RECIPE_ACTION';
export const FETCH_GROUP_MEMBERS = 'FETCH_GROUP_MEMBERS';
export const SEND_GROUP_MEMBERS = 'SEND_GROUP_MEMBERS';

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

export const changeActiveEntryId = (entryId) => ({
  type: CHANGE_ACTIVE_ENTRY_ID,
  entryId,
});

export const handleSearchChange = (input) => ({
  type: START_SEARCH,
  input,
});

export const showResultsAction = (possibleResults) => ({
  type: SHOW_RESULTS_ACTION,
  possibleResults,
});

export const addRecipeToDB = (mealId, recipeId) => ({
  type: ADD_RECIPE_TO_DB,
  mealId,
  recipeId,
});

export const sendNumberPeopleAction = (nbPeople) => ({
  type: SEND_NUMBER_PEOPLE_ACTION,
  nbPeople,
});

export const removeRecipeAction = (mealId, recipeId) => ({
  type: REMOVE_RECIPE_ACTION,
  mealId,
  recipeId,
});

export const fetchGroupMembers = (groupId) => ({
  type: FETCH_GROUP_MEMBERS,
  groupId,
});

export const sendGroupMembers = (data) => ({
  type: SEND_GROUP_MEMBERS,
  data,
});
