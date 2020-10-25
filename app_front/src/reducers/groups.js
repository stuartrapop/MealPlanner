import {
  SEND_GROUPS_DATAS, CHOOSE_GROUP, TOGGLE_MEAL_MODAL, SAVE_NEW_MEAL, SEND_ERROR_MESSAGE, TOGGLE_ADD_RECIPE_ZONE,
} from '../actions/groups';

export const initialState = {
  userInfos: {},
  loading: true,
  activeGroup: 0,
  activeGroupId: 0,
  mealModalDisplayed: false,
  errorMessageBoolean: false,
  addRecipeZoneDisplayed: false,
};

const groupsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_GROUPS_DATAS:
      return {
        ...state,
        userInfos: action.data,
        activeGroupId: action.data.groups[0].id,
        loading: false,
      };
    case CHOOSE_GROUP:
      return {
        ...state,
        activeGroup: action.targetIndexValue,
        activeGroupId: action.targetIdValue.id,
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
    case TOGGLE_ADD_RECIPE_ZONE:
      return {
        ...state,
        addRecipeZoneDisplayed: !state.addRecipeZoneDisplayed,
      };
    default:
      return state;
  }
};

export default groupsReducer;
