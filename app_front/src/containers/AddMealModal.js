import { connect } from 'react-redux';

import AddMealModal from '../components/Main/Landing/MySpace/AddMeal/AddMealModal';

import { toggleMealModal, sendTargetedValues, sendErrorMessage } from '../actions/groups';

const mapStateToProps = (state) => ({
  errorMessageBoolean: state.groups.errorMessageBoolean,
});

const mapDispatchToProps = (dispatch) => ({
  sendAddMealModalAction: () => {
    dispatch(toggleMealModal());
  },
  sendTargetedValuesCombinaisonAction: (choosenDate, choosenTime) => {
    dispatch(sendTargetedValues(choosenDate, choosenTime));
  },
  displayErrorMessage: () => {
    dispatch(sendErrorMessage());
  },
});

const AddMealModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddMealModal);

export default AddMealModalContainer;
