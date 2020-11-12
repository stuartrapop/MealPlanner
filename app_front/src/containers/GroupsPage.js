import { connect } from 'react-redux';
import GroupsPage from '../components/Main/GroupsPage';
import {
  fetchGroupMembers,
  deleteGroupAction,
  leaveGroupAction,
  toggleCreateGroupModalAction,
  saveGroupNameChange,
  createGroupAction,
  fetchAllUsersAction,
  toggleEditGroupNameZone,
  updateGroupNewNameAction,
  sendNewGroupName,
} from '../actions/groups';

const mapStateToProps = (state) => ({
  userInfos: state.groups.userInfos,
  groupMembers: state.groups.groupMembers,
  createGroupModalBool: state.groups.createGroupModalBool,
  groupNameInputValue: state.groups.groupNameInputValue,
  editGroupNameZoneDisplay: state.groups.editGroupNameZoneDisplay,
  newGroupNameProposal: state.groups.newGroupNameProposal,
  groupCreationError: state.groups.groupCreationError,
  gettingAllUsersLoading: state.groups.gettingAllUsersLoading,
  groupMembersIsDefined: state.groups.groupMembersIsDefined,
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

  toggleEditGroupNameZone: (groupIndex) => {
    dispatch(toggleEditGroupNameZone(groupIndex));
  },

  updateGroupNewNameAction: (input) => {
    dispatch(updateGroupNewNameAction(input));
  },

  sendNewGroupNameAction: (newName, groupid) => {
    dispatch(sendNewGroupName(newName, groupid));
  },
});

// Container
const GroupsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupsPage);

// == Export
export default GroupsPageContainer;
