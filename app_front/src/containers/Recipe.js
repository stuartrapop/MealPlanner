import { connect } from 'react-redux';
import Recipe from '../components/Main/Recipe';
import { getRecipe } from '../actions/recipes';
import { getRecipeBySlug } from '../selectors/recipes';

const mapStateToProps = (state, ownProps) => ({
  recipe: getRecipeBySlug(state.recipes.recipes, ownProps.slug),
});

const mapDispatchToProps = (dispatch) => ({
  getOneRecipe: () => {
    dispatch(getRecipe());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
