import { connect } from 'react-redux';
import SearchBar from '../components/Main/Recipes/SearchBar';

import {
  startSearch,
  updateSelection,
  displaySelection,
} from '../actions/searchBar';

const mapStateToProps = (state) => ({
  loading: state.searchBar.loading,
  value: state.searchBar.value,
});

const mapDispatchToProps = (dispatch) => ({
  startRecipesSearch: (text) => {
    dispatch(startSearch(text));
  },
  updatedSelection: (text) => {
    dispatch(updateSelection(text));
  },
  displayedSelection: (text) => {
    dispatch(displaySelection(text));
  },
});

// Container
const SearchBarContainer = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

// == Export
export default SearchBarContainer;
