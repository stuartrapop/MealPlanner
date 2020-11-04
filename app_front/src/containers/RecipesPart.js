import { connect } from 'react-redux';
import RecipesPart from '../components/Main/Recipes/RecipesPart';

const mapStateToProps = (state) => (
  {
    searchedRecipes: state.recipes.searchedRecipes,
  });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesPart);
