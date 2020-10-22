import { connect } from 'react-redux';
// importer les actions from 'src/actions/user'
import { checkIsLogged } from '../actions/user';
import App from '../components/App';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  checkIsLogged: () => {
    dispatch(checkIsLogged());
  },
});

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// == Export
export default AppContainer;
