import { SHOW_MODAL, CLOSE_MODAL } from '../actions/header';

export const initialState = {
  showModalBoolean: false,
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
    default:
      return state;
  }
};

export default headerReducer;
