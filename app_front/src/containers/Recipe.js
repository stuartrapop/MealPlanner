import { connect } from 'react-redux';
import Recipe from '../components/Main/Recipe';
import { getRecipe } from '../actions/recipe';
import { getRecipeBySlug } from '../selectors/recipes';

const mapStateToProps = (state, ownProps) => ({
  // recipe: state.recipe.recipe,
  recipe: getRecipeBySlug(state.recipes.recipes, ownProps.slug),
});

const mapDispatchToProps = (dispatch) => ({
  getOneRecipe: () => {
    dispatch(getRecipe());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);