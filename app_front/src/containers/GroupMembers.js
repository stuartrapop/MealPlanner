import { connect } from 'react-redux';
import GroupMembers from '../components/Main/GroupsPage/GroupMembers';
import {
  toggleAddMemberModalAction,
  showPossibleMembersAction,
  memberSearchInputAction,
  addMemberToGroupAction,
  removeUserAction,
  toggleErrorMessageDisplay,
  changeRoleAction,
} from '../actions/groups';

const mapStateToProps = (state) => ({
  groupMembers: state.groups.groupMembers,
  usersList: state.groups.usersList,
  addMemberModalBool: state.groups.addMemberModalBool,
  membersSearchResults: state.groups.membersSearchResults,
  membersSearchValue: state.groups.membersSearchValue,
  userInfos: state.groups.userInfos,
  errorMessageDisplayed: state.groups.errorMessageDisplayed,
});

const mapDispatchToProps = (dispatch) => ({

  toggleAddMemberModal: () => {
    dispatch(toggleAddMemberModalAction());
  },

  memberSearchAction: (input) => {
    dispatch(memberSearchInputAction(input));
  },

  showResults: (possibleMembers) => {
    dispatch(showPossibleMembersAction(possibleMembers));
  },

  addMemberToGroup: (groupId, userId) => {
    dispatch(addMemberToGroupAction(groupId, userId));
  },

  removeUserAction: (groupId, userId) => {
    dispatch(removeUserAction(groupId, userId));
  },

  toggleErrorMessageDisplay: () => {
    dispatch(toggleErrorMessageDisplay());
  },

  changeRoleAction: (userRole, userId) => {
    dispatch(changeRoleAction(userRole, userId));
  },
});

// Container
const GroupMembersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupMembers);

// == Export
export default GroupMembersContainer;
