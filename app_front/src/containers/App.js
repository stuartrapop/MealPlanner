import { connect } from 'react-redux';
// importer les actions from 'src/actions/user'
import { checkIsLogged } from '../actions/user';
import { fetchRecipes } from '../actions/recipes';
import App from '../components/App';

const mapStateToProps = (state) => ({
  loading: state.searchBar.loading,
});

const mapDispatchToProps = (dispatch) => ({
  checkIsLogged: () => {
    dispatch(checkIsLogged());
  },
  fetchrecipes: () => {
    dispatch(fetchRecipes());
  },
});

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// == Export
export default AppContainer;
