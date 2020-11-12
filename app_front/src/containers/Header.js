import { connect } from 'react-redux';
import { displayConnexionModal, removeConnexionModal, handleMenuDisplay } from '../actions/header';
import { handleLogOut } from '../actions/user';
import Header from '../components/Header';

const mapStateToProps = (state) => ({
  showModalBoolean: state.header.showModalBoolean,
  showMenuBoolean: state.header.showMenuBoolean,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  handleConnexionButtonClick: () => {
    dispatch(displayConnexionModal());
  },

  handleCloseModalClick: () => {
    dispatch(removeConnexionModal());
  },

  handleMenuClick: () => {
    dispatch(handleMenuDisplay());
  },

  handleLogOutClick: () => {
    dispatch(handleLogOut());
  },
});

// Container
const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

// == Export
export default HeaderContainer;
