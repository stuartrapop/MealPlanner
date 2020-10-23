import { connect } from 'react-redux';
// importer les actions from 'src/actions/user'

import Main from '../components/Main';

const mapStateToProps = (state) => ({
  loading: state.searchBar.loading,
});

const mapDispatchToProps = (dispatch) => {};

// Container
const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

// == Export
export default MainContainer;
