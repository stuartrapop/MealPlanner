import { connect } from 'react-redux';

import AddMealModal from '../components/Main/Landing/MySpace/AddMeal/AddMealModal';

import { toggleMealModal, sendTargetedValues } from '../actions/groups';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  sendAddMealModalAction: () => {
    dispatch(toggleMealModal());
  },
  sendTargetedValuesCombinaisonAction: (choosenDate, choosenTime) => {
    dispatch(sendTargetedValues(choosenDate, choosenTime));
  },
});

// Container
const AddMealModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddMealModal);

// == Export
export default AddMealModalContainer;
