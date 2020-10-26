import { connect } from 'react-redux';

import AddMeal from '../components/Main/Landing/MySpace/AddMeal';

import { chooseGroup, toggleMealModal, removeMealAction, toggleAddRecipeZone } from '../actions/groups';

const mapStateToProps = (state) => ({
  userInfos: state.groups.userInfos,
  activeGroup: state.groups.activeGroup,
  mealModalDisplayed: state.groups.mealModalDisplayed,
  addRecipeZoneDisplayed: state.groups.addRecipeZoneDisplayed,
  groupValueDropdown: state.groups.groupValueDropdown,
});

const mapDispatchToProps = (dispatch) => ({
  choosenGroup: (targetIndexValue, targetIdValue, targetedGroupValue) => {
    dispatch(chooseGroup(targetIndexValue, targetIdValue, targetedGroupValue));
  },

  sendAddMealModalAction: () => {
    dispatch(toggleMealModal());
  },

  sendRemoveMealAction: (targetMealId) => {
    dispatch(removeMealAction(targetMealId));
  },

  sendToggleAddRecipeZone: (id) => {
    dispatch(toggleAddRecipeZone(id));
  },
});

// Container
const AddMealContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddMeal);

// == Export
export default AddMealContainer;