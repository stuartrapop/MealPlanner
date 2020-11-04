import { connect } from 'react-redux';
import Recipes from '../components/Main/Recipes';
import { fetchRecipes } from '../actions/recipes';

const mapStateToProps = (state) => (
  {
    recipes: state.recipes.recipes,
  });

const mapDispatchToProps = (dispatch) => ({
  fetchrecipes: () => {
    dispatch(fetchRecipes());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
