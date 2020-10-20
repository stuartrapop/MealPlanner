/* eslint-disable no-console */
/* eslint-disable no-case-declarations */

import axios from 'axios';
import {
  LOG_IN,
  CHECK_IS_LOGGED,
  LOG_OUT,
  saveUser,
} from 'src/actions/user';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // Sur l'action de LOG_IN, je tente de me connecter
    case LOG_IN:
      // Je récupère les valeurs des champs email et password
      // Depuis le state du store
      const state = store.getState();
      const { email, password } = state.user;
      axios.post('http://localhost:3000/login', { email, password }, { withCredentials: true })
        .then((response) => {
          const newObject = {
            isLogged: true,
            pseudo: response.data.userName,
          };
          store.dispatch(saveUser(newObject.pseudo, newObject.isLogged));
          console.log(response.data);
          next(action);
        })
        .catch((e) => {
          console.error(e);
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
    case LOG_OUT:
      axios.post('http://localhost:3000/logout', {}, {
        withCredentials: true,
      })
        .then(() => {
          next(action);
        })
        .catch((e) => {
          console.error(e);
        });
      break;
    default:
      next(action);
      break;
  }
};

export default userMiddleware;
