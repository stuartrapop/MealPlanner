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
export const DELETE_GROUP_ACTION = 'DELETE_GROUP_ACTION';
export const LEAVE_GROUP_ACTION = 'LEAVE_GROUP_ACTION';
export const TOGGLE_CREATE_GROUP_MODAL_ACTION = 'TOGGLE_CREATE_GROUP_MODAL_ACTION';
export const SAVE_GROUP_NAME_CHANGE = 'SAVE_GROUP_NAME_CHANGE';
export const CREATE_GROUP_ACTION = 'CREATE_GROUP_ACTION';
export const FETCH_ALL_USERS = 'FETCH_ALL_USERS';
export const SEND_ALL_USERS = 'SEND_ALL_USERS';
export const TOGGLE_ADD_MEMBER_MODAL_ACTION = 'TOGGLE_ADD_MEMBER_MODAL_ACTION';
export const SHOW_POSSIBLE_MEMBERS_ACTION = 'SHOW_POSSIBLE_MEMBERS_ACTION';
export const MEMBER_SEARCH_INPUT_ACTION = 'MEMBER_SEARCH_INPUT_ACTION';
export const ADD_MEMBER_TO_GROUP_ACTION = 'ADD_MEMBER_TO_GROUP_ACTION';
export const RESET_ACTIVE_ENTRY_ACTION = 'RESET_ACTIVE_ENTRY_ACTION';
export const REMOVE_USER_ACTION = 'REMOVE_USER_ACTION';
export const TOGGLE_ERROR_MESSAGE_DISPLAY = 'TOGGLE_ERROR_MESSAGE_DISPLAY';
export const TOGGLE_EDIT_GROUP_NAME_ZONE = 'TOGGLE_EDIT_GROUP_NAME_ZONE';
export const UPDATE_GROUP_NEW_NAME_ACTION = 'UPDATE_GROUP_NEW_NAME_ACTION';
export const SEND_NEW_GROUP_NAME = 'SEND_NEW_GROUP_NAME';
export const CHANGE_ROLE_ACTION = 'CHANGE_ROLE_ACTION';
export const SEND_GROUP_CREATION_ERROR = 'SEND_GROUP_CREATION_ERROR';

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

export const deleteGroupAction = (groupId) => ({
  type: DELETE_GROUP_ACTION,
  groupId,
});

export const leaveGroupAction = (groupId, userId) => ({
  type: LEAVE_GROUP_ACTION,
  groupId,
  userId,
});

export const toggleCreateGroupModalAction = () => ({
  type: TOGGLE_CREATE_GROUP_MODAL_ACTION,
});

export const saveGroupNameChange = (input) => ({
  type: SAVE_GROUP_NAME_CHANGE,
  input,
});

export const createGroupAction = (groupName, userId) => ({
  type: CREATE_GROUP_ACTION,
  groupName,
  userId,
});

export const fetchAllUsersAction = () => ({
  type: FETCH_ALL_USERS,
});

export const sendAllUsers = (usersList) => ({
  type: SEND_ALL_USERS,
  usersList,
});

export const toggleAddMemberModalAction = () => ({
  type: TOGGLE_ADD_MEMBER_MODAL_ACTION,
});

export const showPossibleMembersAction = (possibleMembers) => ({
  type: SHOW_POSSIBLE_MEMBERS_ACTION,
  possibleMembers,
});

export const memberSearchInputAction = (input) => ({
  type: MEMBER_SEARCH_INPUT_ACTION,
  input,
});

export const addMemberToGroupAction = (groupId, userId) => ({
  type: ADD_MEMBER_TO_GROUP_ACTION,
  groupId,
  userId,
});

export const resetActiveEntryIdAction = () => ({
  type: RESET_ACTIVE_ENTRY_ACTION,
});

export const removeUserAction = (groupId, userId) => ({
  type: REMOVE_USER_ACTION,
  groupId,
  userId,
});

export const toggleErrorMessageDisplay = () => ({
  type: TOGGLE_ERROR_MESSAGE_DISPLAY,
});

export const toggleEditGroupNameZone = (groupIndex) => ({
  type: TOGGLE_EDIT_GROUP_NAME_ZONE,
  groupIndex,
});

export const updateGroupNewNameAction = (input) => ({
  type: UPDATE_GROUP_NEW_NAME_ACTION,
  input,
});

export const sendNewGroupName = (newName, groupid) => ({
  type: SEND_NEW_GROUP_NAME,
  newName,
  groupid,
});

export const changeRoleAction = (userRole, userId) => ({
  type: CHANGE_ROLE_ACTION,
  userRole,
  userId,
});

export const sendGroupCreationError = (errorMsg) => ({
  type: SEND_GROUP_CREATION_ERROR,
  errorMsg,
});
