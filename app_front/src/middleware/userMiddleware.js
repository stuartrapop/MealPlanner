/* eslint-disable no-console */
/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  LOG_IN,
  CHECK_IS_LOGGED,
  saveUser,
  sendErrorMessage,
  HANDLE_SIGN_IN,
  signIn,
  HANDLE_LOG_OUT,
  UPDATE_ACCOUNT_INFOS,
  REMOVE_ACCOUNT,
  resetAllFieldsValue,
  logInWentSuccessfully,
} from '../actions/user';

import { handleMenuDisplay } from '../actions/header';

import { fetchGroupsDatasAction } from '../actions/groups';

axios.defaults.withCredentials = true;

const userMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  const {
    id, firstName, lastName, userName,
  } = state.user;
  switch (action.type) {
    // On this action we are trying to log in
    case LOG_IN:
      // I am getting the values of email and password fields from the state of the store
      const { logInEmail, logInPassword } = state.user;
      let email = logInEmail;
      let password = logInPassword;
      axios.post(`${process.env.APISERVER}/login`, { email, password }, { withCredentials: true })
        .then((response) => {
          store.dispatch(saveUser(response.data));
          store.dispatch(logInWentSuccessfully());
          next(action);
        })
        .catch((e) => {
          console.error(e);
          store.dispatch(sendErrorMessage());
        });
      break;
    case CHECK_IS_LOGGED:
      axios.post(`${process.env.APISERVER}/isLogged`, {}, {
        // Aim to send the cookie to the server, without it, server doesn't recognize us anymore
        withCredentials: true,
      }).then((response) => {
        console.log(response.data);
        store.dispatch(saveUser(response.data));
        next(action);
      })
        .catch((e) => {
          console.error(e);
        });
      break;
    case HANDLE_SIGN_IN:
      email = state.user.email;
      password = state.user.password;
      axios.post(`${process.env.APISERVER}/user/create`, {
        email, password, firstName, lastName, userName,
      }, { withCredentials: true })
        .then(() => {
          const signInWentSuccesfully = 1;
          store.dispatch(signIn(signInWentSuccesfully, []));
          store.dispatch(resetAllFieldsValue());
          next(action);
        })
        .catch((e) => {
          const signInWentSuccesfully = 2;
          store.dispatch(signIn(signInWentSuccesfully, e.response.data.error.details));
        });
      break;
    case HANDLE_LOG_OUT:
      axios.post(`${process.env.APISERVER}/logout`, {}, { withCredentials: true })
        .then(() => {
          store.dispatch(handleMenuDisplay());
          next(action);
        })
        .catch((e) => {
          console.log(e);
        });
      break;
    case UPDATE_ACCOUNT_INFOS:
      axios.patch(`${process.env.APISERVER}/user/${id}`, { firstName, lastName, userName }, { withCredentials: true })
        .then(() => {
          next(action);
          store.dispatch(fetchGroupsDatasAction());
        })
        .catch((e) => {
          console.error(e);
          let { logInError } = state.user;
          logInError = true;
          store.dispatch(sendErrorMessage(logInError));
        });
      break;
    case REMOVE_ACCOUNT:
      console.log('action.accountId', action.accountId);
      axios.delete(`${process.env.APISERVER}/user/${action.accountId}`, {}, { withCredentials: true })
        .then(() => {
          // next(action);
          console.log('success');
          next(action);
        })
        .catch((e) => {
          console.error(e);
          let { logInError } = state.user;
          logInError = true;
          store.dispatch(sendErrorMessage(logInError));
        });
      break;
    default:
      next(action);
      break;
  }
};

export default userMiddleware;
