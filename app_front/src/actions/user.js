export const CHANGE_LOGIN_FIELD_VALUE = 'CHANGE_LOGIN_FIELD_VALUE';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER = 'SAVE_USER';
export const CHECK_IS_LOGGED = 'CHECK_IS_LOGGED';
export const SEND_ERROR_MESSAGE = 'SEND_ERROR_MESSAGE';
export const HANDLE_LOG_OUT = 'HANDLE_LOG_OUT';
export const LOG_OUT = 'LOG_OUT';
export const HANDLE_SIGN_IN = 'HANDLE_SIGN_IN';
export const SIGN_IN = 'SIGN_IN';
export const TOGGLE_LOG_IN_COMPONENT = 'TOGGLE_LOG_IN_COMPONENT';
export const SHOW_ERROR_MESSAGE = 'SHOW_ERROR_MESSAGE';

export const changeLoginFieldValue = (value, name) => ({
  type: CHANGE_LOGIN_FIELD_VALUE,
  value,
  name,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const saveUser = (data) => ({
  type: SAVE_USER,
  data,
});

export const checkIsLogged = () => ({
  type: CHECK_IS_LOGGED,
});

export const sendErrorMessage = (logInError) => ({
  type: SEND_ERROR_MESSAGE,
  logInError,
});

export const handleLogOut = () => ({
  type: HANDLE_LOG_OUT,
});

export const logOut = (isLogged) => ({
  type: LOG_OUT,
  isLogged,
});

export const handleSignIn = () => ({
  type: HANDLE_SIGN_IN,
});

export const signIn = (signInWentSuccesfully, errorMessage) => ({
  type: SIGN_IN,
  signInWentSuccesfully,
  errorMessage,
});

export const toggleLogInComponent = () => ({
  type: TOGGLE_LOG_IN_COMPONENT,
});