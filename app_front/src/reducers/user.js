/* eslint-disable no-case-declarations */
import {
  CHANGE_LOGIN_FIELD_VALUE,
  SAVE_USER,
  SEND_ERROR_MESSAGE,
  LOG_OUT,
  SIGN_IN,
  TOGGLE_LOG_IN_COMPONENT,
} from '../actions/user';

export const initialState = {
  logInEmail: '',
  logInPassword: '',
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  userName: '',
  isLogged: false,
  logInError: false,
  signInWentSuccesfully: null,
  displaySignInComponent: false,
  errorMessage: [],
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
        logInEmail: '',
        logInPassword: '',
        isLogged: action.data.isLogged,
        pseudo: action.data.pseudo,
        logInError: false,
        signInWentSuccesfully: null,
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
    case SIGN_IN:
      return {
        ...state,
        signInWentSuccesfully: action.signInWentSuccesfully,
        errorMessage: action.errorMessage,
      };
    case TOGGLE_LOG_IN_COMPONENT:
      return {
        ...state,
        displaySignInComponent: !state.displaySignInComponent,
        logInError: false,
        signInWentSuccesfully: null,
      };
    default:
      return state;
  }
};

export default userReducer;
