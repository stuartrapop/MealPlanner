import { connect } from 'react-redux';
import {
  startSearch,
  updateSelection,
  displaySelection,
} from 'src/actions/searchBar';

import SearchBar from 'src/components/Main/Recipes/SearchBar';

const mapStateToProps = (state) => ({
  loading: state.searchBar.loading,
  results: state.user.results,
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
const SearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);

// == Export
export default SearchBarContainer;
