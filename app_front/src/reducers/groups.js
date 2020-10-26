import {
  SEND_GROUPS_DATAS, CHOOSE_GROUP, TOGGLE_MEAL_MODAL, SAVE_NEW_MEAL, SEND_ERROR_MESSAGE, TOGGLE_ADD_RECIPE_ZONE, UPDATE_ADD_RECIPE_DISPLAYED_ARRAY,
} from '../actions/groups';

export const initialState = {
  userInfos: {},
  loading: true,
  activeGroup: 0,
  activeGroupId: 0,
  mealModalDisplayed: false,
  errorMessageBoolean: false,
  addRecipeZoneDisplayed: [],
  groupValueDropdown: '',
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
        addRecipeZoneDisplayed: state.addRecipeZoneDisplayed.push(false),
      };
    case SEND_ERROR_MESSAGE:
      return {
        ...state,
        errorMessageBoolean: true,
      };
    case TOGGLE_ADD_RECIPE_ZONE:
      return {
        ...state,
        addRecipeZoneDisplayed: state.addRecipeZoneDisplayed.map((element, index) => {
          if (index == action.id) {
            return (true);
          }
          return (false);
        }),
      };
    case UPDATE_ADD_RECIPE_DISPLAYED_ARRAY:
      return {
        ...state,
        addRecipeZoneDisplayed: action.newArray,
      };
    default:
      return state;
  }
};

export default groupsReducer;
