import { connect } from 'react-redux';
import EditProfile from '../components/Main/EditProfile';
import {
  changeLoginFieldValue,
  insertDefaultUserInfos,
  updateAccountInfos,
  removeAccount,
} from '../actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  userName: state.user.userName,
  editProfil: state.user.editProfil,
  defaultUserInfos: state.groups.userInfos,
});
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeLoginFieldValue(value, name));
  },
  insertDefaultUserInfos: ({
    userName, firstName, lastName, email,
  }) => {
    dispatch(insertDefaultUserInfos(userName, firstName, lastName, email));
  },
  updateAccountInfos: () => {
    dispatch(updateAccountInfos());
  },
  removeAccount: (accountId) => {
    dispatch(removeAccount(accountId));
  },
});

const GroupMembersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProfile);

export default GroupMembersContainer;
