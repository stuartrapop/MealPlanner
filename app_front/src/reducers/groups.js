import { SEND_GROUPS_DATAS } from '../actions/groups';

export const initialState = {
  groups: {},
  loading: true,
};

const groupsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_GROUPS_DATAS:
      return {
        ...state,
        groups: action.data,
        loading: false,
      };
    default:
      return state;
  }
};

export default groupsReducer;
