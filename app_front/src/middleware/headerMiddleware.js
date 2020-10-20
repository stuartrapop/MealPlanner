/* eslint-disable no-case-declarations */
import { DISPLAY_CONNEXION_MODAL, showModal, REMOVE_CONNEXION_MODAL, closeModal } from '../actions/header';

const headerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case DISPLAY_CONNEXION_MODAL:
      const state = store.getState();
      let { showModalBoolean } = state.header;
      showModalBoolean = true;
      // On veut simplement changer l'état d'un booléen dans le state
      store.dispatch(showModal(showModalBoolean));
      break;
    case REMOVE_CONNEXION_MODAL:
      showModalBoolean = false;
      // On veut simplement changer l'état d'un booléen dans le state
      store.dispatch(closeModal(showModalBoolean));
      break;
    default:
      next(action);
      break;
  }
};

export default headerMiddleware;
