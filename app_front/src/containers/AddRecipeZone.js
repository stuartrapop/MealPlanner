import { connect } from 'react-redux';

import AddRecipeZone from '../components/Main/Landing/MySpace/AddMeal/AddRecipeZone';
import { changeActiveEntryId, handleSearchChange, showResultsAction, addRecipeToDB, } from '../actions/groups';

const mapStateToProps = (state) => ({
  addMealEntryActive: state.groups.addMealEntryActive,
  recipesList: state.recipes.recipes,
  recipesSearchLoading: state.groups.recipesSearchLoading,
  recipesSearchResults: state.groups.recipesSearchResults,
  recipesSearchValue: state.groups.recipesSearchValue,
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveEntryIdAction: (id) => {
    dispatch(changeActiveEntryId(id));
  },

  handleSearchChangeAction: (input) => {
    dispatch(handleSearchChange(input));
  },

  showResults: (possibleResults) => {
    dispatch(showResultsAction(possibleResults));
  },

  addRecipeToDB: (id, recipeName, numberPeople) => {
    dispatch(addRecipeToDB(id, recipeName, numberPeople));
  },
});

// Container
const AddRecipeZoneContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddRecipeZone);

// == Export
export default AddRecipeZoneContainer;
