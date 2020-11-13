import { connect } from 'react-redux';
import { checkIsLogged } from '../actions/user';
import { fetchRecipes } from '../actions/recipes';
import App from '../components/App';

const mapStateToProps = (state) => ({
  loading: state.recipes.loading,
});

const mapDispatchToProps = (dispatch) => ({
  checkIsLogged: () => {
    dispatch(checkIsLogged());
  },
  fetchrecipes: () => {
    dispatch(fetchRecipes());
  },
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
