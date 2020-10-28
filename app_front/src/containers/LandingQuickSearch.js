import { connect } from 'react-redux';
import LandingQuickSearch from '../components/Main/Landing/LandingQuickSearch';
import { modifySearch } from '../actions/searchBar';

const mapStateToProps = (state) => (
  {
    searchedRecipes: state.recipes.searchedRecipes,
    loading: state.recipes.loading,
    searchInput: state.recipes.searchInput,
  });

const mapDispatchToProps = (dispatch) => ({
  modifySearch: (searchInput) => {
    dispatch(modifySearch(searchInput));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingQuickSearch);
