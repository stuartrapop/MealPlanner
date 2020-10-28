import { connect } from 'react-redux';
// importer les actions from 'src/actions/user'
import GroupMembers from '../components/Main/GroupsPage/GroupMembers';

const mapStateToProps = (state) => ({
  groupMembers: state.groups.groupMembers,
});

const mapDispatchToProps = (dispatch) => ({
});

// Container
const GroupMembersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupMembers);

// == Export
export default GroupMembersContainer;
