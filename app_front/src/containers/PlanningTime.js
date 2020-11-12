import { connect } from 'react-redux';
import PlanningTime from '../components/Main/Landing/MySpace/Planning/PlanningDay/PlanningTime';
import { } from '../actions/groups';

const mapStateToProps = (state) => ({
  userInfos: state.groups.userInfos,
  activeGroup: state.groups.activeGroup,
});

const mapDispatchToProps = () => ({
});

// Container
const PlanningTimeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlanningTime);

// == Export
export default PlanningTimeContainer;
