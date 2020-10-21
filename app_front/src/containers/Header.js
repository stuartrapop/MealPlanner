import { connect } from 'react-redux';
// importer les actions from 'src/actions/user'
import { displayConnexionModal, removeConnexionModal, handleMenuDisplay, handleLogOut } from 'src/actions/header';
import Header from 'src/components/Header';

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
