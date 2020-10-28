import { connect } from 'react-redux';
// importer les actions from 'src/actions/user'
import GroupMembers from '../components/Main/GroupsPage/GroupMembers';
import {
  toggleAddMemberModalAction,
  showPossibleMembersAction,
  memberSearchInputAction,
  addMemberToGroupAction,
} from '../actions/groups';

const mapStateToProps = (state) => ({
  groupMembers: state.groups.groupMembers,
  usersList: state.groups.usersList,
  addMemberModalBool: state.groups.addMemberModalBool,
  membersSearchResults: state.groups.membersSearchResults,
  membersSearchValue: state.groups.membersSearchValue,
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
});

// Container
const GroupMembersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupMembers);

// == Export
export default GroupMembersContainer;
