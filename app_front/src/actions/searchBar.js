export const CLEAN_QUERY = 'CLEAN_QUERY';
export const START_SEARCH = 'START_SEARCH';
export const FINISH_SEARCH = 'FINISH_SEARCH';
export const UPDATE_SELECTION = 'UPDATE_SELECTION';
export const DISPLAY_SELECTION = 'DISPLAY_SELECTION';

// export const cleanQuery = () => ({
//   type: CLEAN_QUERY,
// });

export const startSearch = (text) => ({
  type: START_SEARCH,
  text,
});

// export const finishSearch = () => ({
//   type: FINISH_SEARCH,
// });

export const updateSelection = (text) => ({
  type: UPDATE_SELECTION,
  text,
});

export const displaySelection = (results) => ({
  type: DISPLAY_SELECTION,
  results,
});
