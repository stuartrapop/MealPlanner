import { connect } from 'react-redux';

import AddMeal from '../components/Main/Landing/MySpace/AddMeal';

import { chooseGroup } from '../actions/groups';

const mapStateToProps = (state) => ({
  userInfos: state.groups.userInfos,
  activeGroup: state.groups.activeGroup,
});

const mapDispatchToProps = (dispatch) => ({
  chooseGroup: (value) => {
    dispatch(chooseGroup(value));
  },
});

// Container
const AddMealContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddMeal);

// == Export
export default AddMealContainer;
