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
  infos: {},
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
        isLogged: action.user.logged,
        email: '',
        password: '',
        infos: {},
      };
      if (action.user.logged) {
        newState.infos = { pseudo: action.user.pseudo };
      }
      return newState;
    case LOG_OUT:
      return {
        ...state,
        isLogged: false,
        infos: {},
      };
    default:
      return state;
  }
};

export default userReducer;
