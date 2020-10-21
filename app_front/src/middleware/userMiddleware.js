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
  TOGGLE_LOG_IN_COMPONENT,
} from '../actions/user';

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
      axios.post('http://localhost:3000/login', { email, password }, { withCredentials: true })
        .then((response) => {
          const newObject = {
            isLogged: true,
            pseudo: response.data.userName,
          };
          store.dispatch(saveUser(newObject.pseudo, newObject.isLogged));
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
      axios.post('http://localhost:3000/isLogged', {}, {
        // Sert à envoyer le cookie au serveur
        // Sans ça, le serveur ne nous connais plus
        withCredentials: true,
      }).then((response) => {
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
      axios.post('http://localhost:3000/user/create', {
        email, password, firstName, lastName, userName,
      }, { withCredentials: true })
        .then(() => {
          const signInWentSuccesfully = true;
          store.dispatch(signIn(signInWentSuccesfully));
          next(action);
        })
        .catch((e) => {
          const signInWentSuccesfully = false;
          console.error(e);
          store.dispatch(signIn(signInWentSuccesfully));
        });
      break;
    default:
      next(action);
      break;
  }
};

export default userMiddleware;
