/* eslint-disable no-case-declarations */
import {
  CHANGE_LOGIN_FIELD_VALUE,
  SAVE_USER,
  SEND_ERROR_MESSAGE,
  LOG_OUT,
} from '../actions/user';

export const initialState = {
  email: '',
  password: '',
  isLogged: false,
  logInError: false,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_USER:
      const newState = {
        ...state,
        email: '',
        password: '',
        isLogged: action.isLogged,
        pseudo: action.pseudo,
      };
      return newState;
    case SEND_ERROR_MESSAGE:
      return {
        ...state,
        logInError: action.logInError,
      };
    case LOG_OUT:
      return {
        ...state,
        isLogged: action.isLogged,
      };
    default:
      return state;
  }
};

export default userReducer;
