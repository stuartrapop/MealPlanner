import { SEND_GROUPS_DATAS, CHOOSE_GROUP, TOGGLE_MEAL_MODAL } from '../actions/groups';

export const initialState = {
  userInfos: {},
  loading: true,
  activeGroup: 0,
  mealModalDisplayed: false,
};

const groupsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_GROUPS_DATAS:
      return {
        ...state,
        userInfos: action.data,
        loading: false,
      };
    case CHOOSE_GROUP:
      return {
        ...state,
        activeGroup: action.value,
      };
    case TOGGLE_MEAL_MODAL:
      return {
        ...state,
        mealModalDisplayed: true,
      };
    default:
      return state;
  }
};

export default groupsReducer;
