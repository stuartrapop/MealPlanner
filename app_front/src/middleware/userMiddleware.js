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
} from '../actions/user';

axios.defaults.withCredentials = true;

 const APISERVER = 'https://amanger.com/api';
//const APISERVER = 'http://3.127.235.222:3000';

const userMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    // Sur l'action de LOG_IN, je tente de me connecter
    case LOG_IN:
      // Je récupère les valeurs des champs email et password
      // Depuis le state du store
      const { logInEmail, logInPassword } = state.user;
      let email = logInEmail;
      let password = logInPassword;
      axios.post(`${APISERVER}/login`, { email, password }, { withCredentials: true })
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
      axios.post(`${APISERVER}/isLogged`, {}, {
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
      const { firstName, lastName, userName } = state.user;
      email = state.user.email;
      password = state.user.password;
      axios.post(`${APISERVER}/user/create`, {
        email, password, firstName, lastName, userName,
      }, { withCredentials: true })
        .then(() => {
          const signInWentSuccesfully = true;
          store.dispatch(signIn(signInWentSuccesfully, []));
          next(action);
        })
        .catch((e) => {
          const signInWentSuccesfully = false;
          store.dispatch(signIn(signInWentSuccesfully, e.response.data.details));
        });
      break;
    case HANDLE_LOG_OUT:
      axios.post('http://3.127.235.222:3000/logout', {}, { withCredentials: true })
        .then(() => {
          next(action);
        })
        .catch((e) => {
          console.log(e);
        });
      break;
    default:
      next(action);
      break;
  }
};

export default userMiddleware;
