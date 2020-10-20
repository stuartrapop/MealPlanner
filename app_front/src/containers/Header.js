import { connect } from 'react-redux';
// importer les actions from 'src/actions/user'
import { displayConnexionModal, removeConnexionModal } from 'src/actions/header';
import Header from 'src/components/Header';

const mapStateToProps = (state) => ({
  showModalBoolean: state.header.showModalBoolean,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  handleConnexionButtonClick: () => {
    dispatch(displayConnexionModal());
  },

  handleCloseModalClick: () => {
    dispatch(removeConnexionModal());
  },
});

// Container
const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

// == Export
export default HeaderContainer;
