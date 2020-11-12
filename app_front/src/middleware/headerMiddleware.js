/* eslint-disable no-case-declarations */
import {
  DISPLAY_CONNEXION_MODAL,
  showModal,
  REMOVE_CONNEXION_MODAL,
  closeModal,
  HANDLE_MENU_DISPLAY,
  toggleMenu,
} from '../actions/header';
import { HANDLE_LOG_OUT, logOut } from '../actions/user';

const headerMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case DISPLAY_CONNEXION_MODAL:
      let { showModalBoolean } = state.header;
      showModalBoolean = true;
      // We want to change the value of the boolean in the state
      store.dispatch(showModal(showModalBoolean));
      break;
    case REMOVE_CONNEXION_MODAL:
      showModalBoolean = false;
      // We want to change the value of the boolean in the state
      store.dispatch(closeModal(showModalBoolean));
      break;
    case HANDLE_MENU_DISPLAY:
      let { showMenuBoolean } = state.header;
      showMenuBoolean = !showMenuBoolean;
      store.dispatch(toggleMenu(showMenuBoolean));
      break;
    case HANDLE_LOG_OUT:
      let { isLogged } = state.user;
      isLogged = false;
      store.dispatch(logOut(isLogged));
      next(action);
      break;
    default:
      next(action);
      break;
  }
};

export default headerMiddleware;
