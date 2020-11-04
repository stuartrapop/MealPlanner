/* eslint-disable no-case-declarations */
import {
  CHANGE_LOGIN_FIELD_VALUE,
  SAVE_USER,
  SEND_ERROR_MESSAGE,
  LOG_OUT,
  SIGN_IN,
  TOGGLE_LOG_IN_COMPONENT,
  INSERT_DEFAULT_USER_INFOS,
  UPDATE_ACCOUNT_INFOS,
  RESET_ALL_FIELDS_VALUE,
  REMOVE_ACCOUNT,
} from '../actions/user';

export const initialState = {
  logInEmail: '',
  logInPassword: '',
  id: 0,
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  userName: '',
  isLogged: false,
  logInError: false,
  signInWentSuccesfully: 0,
  displaySignInComponent: false,
  errorMessage: [],
  editProfil: [],
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
        id: action.data.userId,
        isLogged: action.data.isLogged,
        pseudo: action.data.pseudo,
        logInError: false,
        signInWentSuccesfully: 0,
      };
      return newState;
    case INSERT_DEFAULT_USER_INFOS:
      return {
        ...state,
        userName: action.userName,
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email,
      };
    case UPDATE_ACCOUNT_INFOS:
      return {
        ...state,
        userName: '',
        firstName: '',
        lastName: '',
      };
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
        signInWentSuccesfully: 0,
      };
    case RESET_ALL_FIELDS_VALUE:
      return {
        ...state,
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        userName: '',
      };

    case REMOVE_ACCOUNT:
      console.log("in remove account user reducer");
      return {
        ...state,
        id: 0,
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        userName: '',
        isLogged: false,
        pseudo: '',
      };
    default:
      return state;
  }
};

export default userReducer;
