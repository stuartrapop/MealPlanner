import { connect } from 'react-redux';

import AddMeal from '../components/Main/Landing/MySpace/AddMeal';

import { chooseGroup, toggleMealModal } from '../actions/groups';

const mapStateToProps = (state) => ({
  userInfos: state.groups.userInfos,
  activeGroup: state.groups.activeGroup,
  mealModalDisplayed: state.groups.mealModalDisplayed,
});

const mapDispatchToProps = (dispatch) => ({
  chooseGroup: (value) => {
    dispatch(chooseGroup(value));
  },

  sendAddMealModalAction: () => {
    dispatch(toggleMealModal());
  },
});

// Container
const AddMealContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddMeal);

// == Export
export default AddMealContainer;
