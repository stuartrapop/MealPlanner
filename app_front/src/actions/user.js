export const CHANGE_LOGIN_FIELD_VALUE = 'CHANGE_LOGIN_FIELD_VALUE';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SAVE_USER = 'SAVE_USER';
export const CHECK_IS_LOGGED = 'CHECK_IS_LOGGED';

export const changeLoginFieldValue = (value, name) => ({
  type: CHANGE_LOGIN_FIELD_VALUE,
  value,
  name,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const saveUser = (user) => ({
  type: SAVE_USER,
  user,
});

export const checkIsLogged = () => ({
  type: CHECK_IS_LOGGED,
});
