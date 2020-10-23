import { SEND_GROUPS_DATAS, CHOOSE_GROUP } from '../actions/groups';

export const initialState = {
  userInfos: {},
  loading: true,
  activeGroup: 0,
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
    default:
      return state;
  }
};

export default groupsReducer;
