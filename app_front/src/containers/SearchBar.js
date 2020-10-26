import { connect } from 'react-redux';
import SearchBar from '../components/Main/Recipes/SearchBar';
import { modifySearch } from '../actions/searchBar';

const mapStateToProps = (state) => ({
  loading: state.recipes.loading,
  searchInput: state.recipes.searchInput,
});

const mapDispatchToProps = (dispatch) => ({
  modifySearch: (searchInput) => {
    dispatch(modifySearch(searchInput));
  },
});

// Container
const SearchBarContainer = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

// == Export
export default SearchBarContainer;
