import { connect } from 'react-redux';
// importer les actions from 'src/actions/user'
import GroupsPage from '../components/Main/GroupsPage';
import { fetchGroupMembers, deleteGroupAction, leaveGroupAction, toggleCreateGroupModalAction, saveGroupNameChange, createGroupAction, fetchAllUsersAction} from '../actions/groups';

const mapStateToProps = (state) => ({
  userInfos: state.groups.userInfos,
  groupMembers: state.groups.groupMembers,
  createGroupModalBool: state.groups.createGroupModalBool,
  groupNameInputValue: state.groups.groupNameInputValue,
});

const mapDispatchToProps = (dispatch) => ({
  fetchGroupMembers: (groupId) => {
    dispatch(fetchGroupMembers(groupId));
  },

  fetchAllUsers: () => {
    dispatch(fetchAllUsersAction());
  },

  handleDeleteGroup: (groupId) => {
    dispatch(deleteGroupAction(groupId));
  },

  handleLeaveGroup: (groupId, userId) => {
    dispatch(leaveGroupAction(groupId, userId));
  },

  toggleCreateGroupModal: () => {
    dispatch(toggleCreateGroupModalAction());
  },

  saveGroupNameChange: (input) => {
    dispatch(saveGroupNameChange(input));
  },

  handleCreateGroup: (groupName, userId) => {
    dispatch(createGroupAction(groupName, userId));
  },
});

// Container
const GroupsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupsPage);

// == Export
export default GroupsPageContainer;
