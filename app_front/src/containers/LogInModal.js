import { connect } from 'react-redux';
import {
  changeLoginFieldValue,
  logIn,
  logOut,
  handleSignIn,
  toggleLogInComponent,
} from '../actions/user';

import LogInModal from '../components/Header/LogInModal';

const mapStateToProps = (state) => ({
  logInEmail: state.user.logInEmail,
  logInPassword: state.user.logInPassword,
  email: state.user.email,
  password: state.user.password,
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  userName: state.user.userName,
  isLogged: state.user.isLogged,
  logInError: state.user.logInError,
  signInWentSuccesfully: state.user.signInWentSuccesfully,
  displaySignInComponent: state.user.displaySignInComponent,
  errorMessage: state.user.errorMessage,
  loginSuccess: state.user.loginSuccess,
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
  handleSignin: () => {
    dispatch(handleSignIn());
  },
  handleToggleLogInComponent: () => {
    dispatch(toggleLogInComponent());
  },
});

// Container
const LogInModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogInModal);

// == Export
export default LogInModalContainer;
