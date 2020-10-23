import {
  CLEAN_QUERY,
  START_SEARCH,
  FINISH_SEARCH,
  UPDATE_SELECTION,
  DISPLAY_SELECTION,
} from '../actions/searchBar';
import {
  SAVE_RECIPES,
} from '../actions/recipes';

export const initialState = {
  loading: true,
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
    case SAVE_RECIPES:
      return {
        ...state,
        loading: false,
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
