import { connect } from 'react-redux';
import PresentationDetailed from '../components/Main/Landing/PresentationDetailed';
import { displayConnexionModal } from '../actions/header';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  handleConnexionButtonClick: () => {
    dispatch(displayConnexionModal());
  },
});

// Container
const PresentationDetailedContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PresentationDetailed);

// == Export
export default PresentationDetailedContainer;
