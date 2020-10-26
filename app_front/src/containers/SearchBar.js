import { connect } from 'react-redux';
import SearchBar from '../components/Main/Recipes/SearchBar';
import {
  modifySearch,
  updateSelection,
  displaySelection,
} from '../actions/searchBar';

const mapStateToProps = (state) => ({
  loading: state.recipes.loading,
  searchInput: state.recipes.searchInput,
});

const mapDispatchToProps = (dispatch) => ({
  modifySearch: (searchInput) => {
    dispatch(modifySearch(searchInput));
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
