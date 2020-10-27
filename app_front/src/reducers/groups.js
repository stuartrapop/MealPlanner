import {
  SEND_GROUPS_DATAS,
  CHOOSE_GROUP,
  TOGGLE_MEAL_MODAL,
  SAVE_NEW_MEAL,
  SEND_ERROR_MESSAGE,
  CHANGE_ACTIVE_ENTRY_ID,
  START_SEARCH,
  SHOW_RESULTS_ACTION,
  SEND_NUMBER_PEOPLE_ACTION,
} from '../actions/groups';

export const initialState = {
  userInfos: {},
  loading: true,
  activeGroup: 0,
  activeGroupId: 0,
  mealModalDisplayed: false,
  errorMessageBoolean: false,
  groupValueDropdown: '',
  addMealEntryActive: 0,
  recipesSearchLoading: false,
  recipesSearchResults: [],
  recipesSearchValue: '',
  numberPeople: 2,
};

const groupsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_GROUPS_DATAS:
      return {
        ...state,
        userInfos: action.data,
        activeGroupId: action.data.groups[state.activeGroup].id,
        groupValueDropdown: action.data.groups[state.activeGroup].name,
        loading: false,
      };
    case CHOOSE_GROUP:
      return {
        ...state,
        activeGroup: action.targetIndexValue,
        activeGroupId: action.targetIdValue.id,
        groupValueDropdown: action.targetedGroupValue,
      };
    case TOGGLE_MEAL_MODAL:
      return {
        ...state,
        mealModalDisplayed: !state.mealModalDisplayed,
      };
    case SAVE_NEW_MEAL:
      return {
        ...state,
        mealModalDisplayed: false,
        errorMessageBoolean: false,
      };
    case SEND_ERROR_MESSAGE:
      return {
        ...state,
        errorMessageBoolean: true,
      };
    case CHANGE_ACTIVE_ENTRY_ID:
      return {
        ...state,
        addMealEntryActive: action.entryId,
      };
    case START_SEARCH:
      return {
        ...state,
        recipesSearchValue: action.input,
      };
    case SHOW_RESULTS_ACTION:
      return {
        ...state,
        recipesSearchResults: action.possibleResults,
      };
    case SEND_NUMBER_PEOPLE_ACTION:
      return {
        ...state,
        numberPeople: action.nbPeople,
      };
    default:
      return state;
  }
};

export default groupsReducer;
