export const MODIFY_SEARCH = 'MODIFY_SEARCH';
export const UPDATE_SELECTION = 'UPDATE_SELECTION';
export const DISPLAY_SELECTION = 'DISPLAY_SELECTION';

export const modifySearch = (searchInput) => ({
  type: MODIFY_SEARCH,
  searchInput,
});

export const updateSelection = (text) => ({
  type: UPDATE_SELECTION,
  text,
});

export const displaySelection = (results) => ({
  type: DISPLAY_SELECTION,
  results,
});
