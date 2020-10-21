import { connect } from 'react-redux';
import {
  changeLoginFieldValue,
  logIn,
  logOut,
} from 'src/actions/user';

import LogInModal from 'src/components/Header/LogInModal';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.isLogged,
  logInError: state.user.logInError,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeLoginFieldValue(value, name));
  },
  handleLogin: () => {
    dispatch(logIn());
  },
  handleLogout: () => {
    dispatch(logOut());
  },
});

// Container
const LogInModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogInModal);

// == Export
export default LogInModalContainer;
