import { connect } from 'react-redux';
import Recipes from '../components/Main/Recipes';
import { fetchRecipes } from '../actions/recipes';
import { changeDisplayRecipe } from '../actions/recipe';
import { getSlugFromTitle } from '../selectors/recipes';

const mapStateToProps = (state) => (
  {
    recipes: state.recipes.recipes,
  });

const mapDispatchToProps = (dispatch) => ({
  fetchrecipes: () => {
    dispatch(fetchRecipes());
  },
  changeDisplayRecipe: (recipeId, recipeSlug) => {
    const newRecipeSlug = getSlugFromTitle(recipeSlug);
    dispatch(changeDisplayRecipe(recipeId, newRecipeSlug));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
