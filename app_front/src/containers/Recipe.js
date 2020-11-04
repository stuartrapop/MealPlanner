import { connect } from 'react-redux';
import Recipe from '../components/Main/Recipe';
import { getRecipe } from '../actions/recipes';
import { getRecipeBySlug } from '../selectors/recipes';
import { increment, decrement } from '../actions/counter';

const mapStateToProps = (state, ownProps) => ({
  recipe: getRecipeBySlug(state.recipes.recipes, ownProps.slug),
  count: state.recipes.value,
});

const mapDispatchToProps = (dispatch) => ({
  getOneRecipe: () => {
    dispatch(getRecipe());
  },
  increment: () => {
    dispatch(increment());
  },
  decrement: () => {
    dispatch(decrement());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
