import { SHOW_MODAL, CLOSE_MODAL, TOGGLE_MENU } from '../actions/header';

export const initialState = {
  showModalBoolean: false,
  showMenuBoolean: false,
};

const headerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        showModalBoolean: action.showModalBoolean,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        showModalBoolean: action.showModalBoolean,
      };
    case TOGGLE_MENU:
      return {
        ...state,
        showMenuBoolean: action.showMenuBoolean,
      };
    default:
      return state;
  }
};

export default headerReducer;
