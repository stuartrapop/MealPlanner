import { connect } from 'react-redux';
// importer les actions from 'src/actions/user'
import EditProfile from '../components/Main/EditProfile';
import { changeLoginFieldValue, modifyDetails } from '../actions/user';

const mapStateToProps = (state) => ({
  email: 'stuart @gmail.com',
  firstName: state.user.firstName,
  lastName: state.user.LastName,
  userName: state.user.UserName,
  editProfil: state.user.editProfil,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeLoginFieldValue(value, name));
  },
  modifyDetails: (editProfil) => {
    dispatch(modifyDetails(editProfil));
  },
});

// Container
const GroupMembersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProfile);

// == Export
export default GroupMembersContainer;
