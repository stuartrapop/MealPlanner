import { connect } from 'react-redux';
// importer les actions from 'src/actions/user'
import GroupsPage from '../components/Main/GroupsPage';
import { fetchGroupMembers } from '../actions/groups';

const mapStateToProps = (state) => ({
  userInfos: state.groups.userInfos,
  groupMembers: state.groups.groupMembers,
});

const mapDispatchToProps = (dispatch) => ({
  fetchGroupMembers: (groupId) => {
    dispatch(fetchGroupMembers(groupId));
  },
});

// Container
const GroupsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupsPage);

// == Export
export default GroupsPageContainer;
