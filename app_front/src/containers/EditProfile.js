import { connect } from 'react-redux';
// importer les actions from 'src/actions/user'
import EditProfile from '../components/Main/EditProfile';
import { changeLoginFieldValue } from '../actions/user';

const mapStateToProps = (state) => ({
  email: 'stuart @gmail.com',
  userInfos: state.groups.userInfos,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeLoginFieldValue(value, name));
  },
});

// Container
const GroupMembersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProfile);

// == Export
export default GroupMembersContainer;
