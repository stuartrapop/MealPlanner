import { connect } from 'react-redux';
// importer les actions from 'src/actions/user'
import EditProfile from '../components/Main/EditProfile';
import { changeLoginFieldValue, insertDefaultUserInfos, updateAccountInfos } from '../actions/user';

const mapStateToProps = (state) => ({
  email: 'stuart @gmail.com',
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  userName: state.user.userName,
  editProfil: state.user.editProfil,
  defaultUserInfos: state.groups.userInfos,
});
// test
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeLoginFieldValue(value, name));
  },
  insertDefaultUserInfos: ({
    userName, firstName, lastName,
  }) => {
    dispatch(insertDefaultUserInfos(userName, firstName, lastName));
  },
  updateAccountInfos: () => {
    dispatch(updateAccountInfos());
  },
});

// Container
const GroupMembersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProfile);

// == Export
export default GroupMembersContainer;
