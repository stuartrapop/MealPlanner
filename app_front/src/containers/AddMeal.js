import { connect } from 'react-redux';

import AddMeal from '../components/Main/Landing/MySpace/AddMeal';

const mapStateToProps = (state) => ({
  groups: state.groups.groups,
});

const mapDispatchToProps = () => ({
});

// Container
const AddMealContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddMeal);

// == Export
export default AddMealContainer;
