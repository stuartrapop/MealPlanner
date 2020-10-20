/* eslint-disable no-case-declarations */
import {
  CHANGE_LOGIN_FIELD_VALUE,
  SAVE_USER,
  LOG_OUT,
} from 'src/actions/user';

export const initialState = {
  email: '',
  password: '',
  isLogged: false,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_USER:
      console.log(action);
      const newState = {
        ...state,
        email: '',
        password: '',
        isLogged: action.isLogged,
        pseudo: action.pseudo,
      };
      return newState;
    case LOG_OUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default userReducer;
