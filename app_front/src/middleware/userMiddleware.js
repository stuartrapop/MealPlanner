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
} from '../actions/user';
import { fetchGroupsDatasAction } from '../actions/groups';

axios.defaults.withCredentials = true;

const userMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  const {
    id, firstName, lastName, userName,
  } = state.user;
  switch (action.type) {
    // Sur l'action de LOG_IN, je tente de me connecter
    case LOG_IN:
      // Je récupère les valeurs des champs email et password
      // Depuis le state du store
      const { logInEmail, logInPassword } = state.user;
      let email = logInEmail;
      let password = logInPassword;
      axios.post(`${process.env.APISERVER}/login`, { email, password }, { withCredentials: true })
        .then((response) => {
          store.dispatch(saveUser(response.data));
          next(action);
        })
        .catch((e) => {
          console.error(e);
          let { logInError } = state.user;
          logInError = true;
          store.dispatch(sendErrorMessage(logInError));
        });
      break;
    case CHECK_IS_LOGGED:
      axios.post(`${process.env.APISERVER}/isLogged`, {}, {
        // Sert à envoyer le cookie au serveur
        // Sans ça, le serveur ne nous connais plus
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
          const signInWentSuccesfully = true;
          store.dispatch(signIn(signInWentSuccesfully, []));
          next(action);
        })
        .catch((e) => {
          const signInWentSuccesfully = false;
          store.dispatch(signIn(signInWentSuccesfully, e.response.data.error.details));
        });
      break;
    case HANDLE_LOG_OUT:
      axios.post(`${process.env.APISERVER}/logout`, {}, { withCredentials: true })
        .then(() => {
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
      axios.delete(`${process.env.APISERVER}/user/${id}`, {}, { withCredentials: true })
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
    default:
      next(action);
      break;
  }
};

export default userMiddleware;
