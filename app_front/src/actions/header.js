export const DISPLAY_CONNEXION_MODAL = 'DISPLAY_CONNEXION_MODAL';
export const SHOW_MODAL = 'SHOW_MODAL';
export const REMOVE_CONNEXION_MODAL = 'REMOVE_CONNEXION_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const HANDLE_MENU_DISPLAY = 'HANDLE_DISPLAY_MENU';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const HANDLE_LOG_OUT = 'HANDLE_LOG_OUT';
export const LOG_OUT = 'LOG_OUT';

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

export const handleMenuDisplay = () => ({
  type: HANDLE_MENU_DISPLAY,
})

export const toggleMenu = (showMenuBoolean) => ({
  type: TOGGLE_MENU,
  showMenuBoolean,
});

export const handleLogOut = () => ({
  type: HANDLE_LOG_OUT,
});

export const logOut = (isLogged) => ({
  type: LOG_OUT,
  isLogged,
});
