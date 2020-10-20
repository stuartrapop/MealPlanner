import {
  CLEAN_QUERY,
  START_SEARCH,
  FINISH_SEARCH,
  UPDATE_SELECTION,
  DISPLAY_SELECTION,
} from '../actions/searchBar';

export const initialState = {
  loading: false,
  results: [],
  text: '',
};

const searchBarReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case START_SEARCH:
      return {
        ...state,
        loading: false,
        value: action.text,
      };
    case DISPLAY_SELECTION:
      return {
        ...state,
        results: action.results,
      };

    default:
      return state;
  }
};

export default searchBarReducer;
