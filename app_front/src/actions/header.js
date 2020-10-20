export const DISPLAY_CONNEXION_MODAL = 'DISPLAY_CONNEXION_MODAL';
export const SHOW_MODAL = 'SHOW_MODAL';
export const REMOVE_CONNEXION_MODAL = 'REMOVE_CONNEXION_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const displayConnexionModal = () => ({
  type: DISPLAY_CONNEXION_MODAL,
});

export const showModal = (showModalBoolean) => ({
  type: SHOW_MODAL,
  showModalBoolean,
});

export const removeConnexionModal = () => ({
  type: REMOVE_CONNEXION_MODAL,
});

export const closeModal = (showModalBoolean) => ({
  type: CLOSE_MODAL,
  showModalBoolean,
});
