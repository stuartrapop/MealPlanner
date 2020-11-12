import { connect } from 'react-redux';

import AddRecipeZone from '../components/Main/Landing/MySpace/AddMeal/AddRecipeZone';
import {
  changeActiveEntryId,
  handleSearchChange,
  showResultsAction,
  addRecipeToDB,
  sendNumberPeopleAction,
  resetActiveEntryIdAction,
} from '../actions/groups';

const mapStateToProps = (state) => ({
  addMealEntryActive: state.groups.addMealEntryActive,
  recipesList: state.recipes.recipes,
  recipesSearchLoading: state.groups.recipesSearchLoading,
  recipesSearchResults: state.groups.recipesSearchResults,
  recipesSearchValue: state.groups.recipesSearchValue,
  numberPeople: state.groups.numberPeople,
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

  addRecipeToDB: (mealId, recipeId) => {
    dispatch(addRecipeToDB(mealId, recipeId));
  },

  sendNumberPeopleAction: (nbPeople) => {
    dispatch(sendNumberPeopleAction(nbPeople));
  },

  resetActiveEntryIdAction: () => {
    dispatch(resetActiveEntryIdAction());
  },
});

const AddRecipeZoneContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddRecipeZone);

export default AddRecipeZoneContainer;
